require('dotenv').config();
const bcrypt = require('bcrypt');
const User = require("../models/user");
const jwt = require('jsonwebtoken');

module.exports = {
  login: async (req, res) => {
    const data = req.body
    const user = await User.findOne({email: data.email})  
    const checkPassword = bcrypt.compareSync(data.password, user.password)
    const token = jwt.sign({user}, process.env.SECRET_KEY)

    if (checkPassword) {
      res.header('auth-token',token).status(200).json({
        message: "Login Succesfull!",
        token 
      })
    } else {
      res.status(400).json({
        message: "Incorrect email or password enterted",
      })
    }
  }
}