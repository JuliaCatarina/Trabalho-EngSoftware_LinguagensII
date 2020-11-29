import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import { User } from '../models/user';


const router = Router();
router.post('/signup', (req,res,next) => {
  bcrypt.hash(req.body.password, 10)
  .then((hash) =>
  {
    const user = User.create({
      nome: req.body.nome,
      email: req.body.email,
      senha: hash,
    }, {fields:
      ['email', 'nome', 'senha']
    });
    console.log(user);

    // guardar no banco de dado email + hash da senha
    res.status(201).json({
      message:"Usuario criado com successo",
      statusCode: 201,
    })
  },
  //Hash error
  (reason) => {
    console.log(reason); 

    res.status(401).json({
      message: "Failed Signing Up",
      statusCode: 401,
    })
  })
})

router.post('/login', (req,res,next) => {
  User.findOne({
    where : {
      email: req.body.email,
      }
    })
    .then((user : User | null) => {
      if (user) {
        return bcrypt.compare(req.body.password, user.senha);
      }
      
      throw {
        status: 404, 
        message: "User Not Found",
      }
    })
    .then((passwordMatched : boolean) => {
      if (!passwordMatched){
        return res.status(200).json({
          message : "Authentication failed.",
          statusCode: 401,
        })
      }

      const token = jwt.sign(
        {email:req.body.email},
        "secret frase longa poggers",
        {expiresIn:"1h"});

      return res.status(200).json({
        message:"Login com successo",
        token: token,
        expiresIn: 3600,
        statusCode: 200,
      });
    }, (reason) => {
      return res.status(200).json({
        message: reason.message,
        statusCode: reason.status,
      })
    })
    .catch((reason) => {
      console.log(reason);
    })
});

export { router as usersRouter };
