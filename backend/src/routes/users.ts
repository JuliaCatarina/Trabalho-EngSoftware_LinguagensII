import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";

import { connection } from "../dbconnection";
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
  }, (reason) => {
    console.log(reason); 

    res.status(401).json({
      message: "Failed Signing Up",
    })
  }).catch((err) => {
    res.status(401).json({
      message: "Failed Signing Up",
    })
  })
})

router.post('/login', (req,res,next) => {
  User.findOne({where : {
    email: req.body.email,
  }})
    .then((user : User | null) => {
      if (user)
        return bcrypt.compare(req.body.password, user.senha)
    })
    .then((passwordMatched?:boolean) => {
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
    });
});

// let validated_users = [
//   {email: 'tabaco@tbc.com', password:'$2b$10$9p4cZfvjNylvc9VOWkr87u2Qeq7DvgVwHQEsm/1v12eVve./9hdW.'}
// ]

export { router as usersRouter };
