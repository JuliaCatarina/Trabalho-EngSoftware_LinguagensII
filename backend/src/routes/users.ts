import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from "jsonwebtoken";
// const authguard = require('../middleware/auth-guard')

const router = Router();


router.post('/signup',(req,res,next) => {
  bcrypt.hash(req.body.password, 10).then((hash)=> {
    // guardar no banco de dado email + hash da senha
    res.status(201).json({
      message:"Usuario criado com successo",
    })
  }, (reason) => {
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
    // substituir por conexao com DB buscar usuario em um DB
    bcrypt.compare(req.body.password, '$2b$10$9p4cZfvjNylvc9VOWkr87u2Qeq7DvgVwHQEsm/1v12eVve./9hdW.')
      .then((result) => {
        if (!result){
          res.status(401).json({
            message : "Authentication failed.",
          })
        }

        const token = jwt.sign(
          {email:req.body.email},
          "secret frase longa poggers",
          {expiresIn:"1h"});

        res.status(200).json({
          message:"Login com successo",
          token: token,
          expiresIn: 3600000
        });
      })
      .catch( (err) => {
        res.status(401).json({
          message: "Unknown error Logging in"
        })
      });
});

let validated_users = [
  {email: 'tabaco@tbc.com', password:'$2b$10$9p4cZfvjNylvc9VOWkr87u2Qeq7DvgVwHQEsm/1v12eVve./9hdW.'}
]

export { router as usersRouter };
