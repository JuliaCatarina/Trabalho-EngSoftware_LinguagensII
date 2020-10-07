import { Request, Response, NextFunction } from "express";
// const jwt = require('jsonwebtoken');
import jwt from "jsonwebtoken";

module.exports = (req : Request, res : Response, next : NextFunction) => {
  try{
    // "Bearer ...token..."
    const token = (<string>req.headers.authentication)?.split(" ")[1];
    jwt.verify(token, "secret frase longa poggers");
    next();
  } catch (error) {
    res.status(401).json({message: "Auth failed!"});
  }
}
