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
    })
  }, 
  //Hash error
  (reason) => {
    console.log(reason); 

    res.status(401).json({
      message: "Failed Signing Up",
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
        return bcrypt.compare(req.body.password, user.senha)
      }
      throw {
        status: 404, 
        message: "User Not Found"
      }
    })
    .then((passwordMatched : boolean) => {
      if (!passwordMatched){
        return res.status(401).json({
          message : "Authentication failed.",
        })
      }

      const token = jwt.sign(
        {email:req.body.email},
        "secret frase longa poggers",
        {expiresIn:"1h"});

      return res.status(200).json({
        message:"Login com successo",
        token: token,
        expiresIn: 3600000
      });
    }, (reason) => {
      return res.status(reason.status).json({
        message: reason.message,
      })
    })
    .catch((reason) => {
      console.log(reason);
    })
});

export { router as usersRouter };
