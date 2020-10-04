const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  try{
    const token = req.headers.authentication.split(" ")[1];
    // "Bearer ...token..."
    jwt.verify(token, "secret frase longa poggers");
    next();
  } catch (error) {
    res.status(401).json({message: "Auth failed!"})
  }
}
