const User = require("../models/user");
const bcrypt = require('bcrypt');

module.exports = {

    getAllUser: async (req, res) => {
        try {
            const users = await User.find({}, "-__v")
            
            res.status(200).json({
              message: "Succes get data",
              data: users
            })
          } catch (error) {
            res.status(500).json({ message: "Server Error" })
          }
    },

    addUser: (req, res) => {
        const data = req.body

        const saltRounds = 10
        const hash = bcrypt.hashSync(data.password, saltRounds);
        data.password = hash

        const user = new User(data)

        user.save()
        res.json({
            massage : "data created succesfull"
        })
    },

    getUserByID: async (req, res) => {
        try {
            const users = await User.findById(req.params.id, "-__v")
      
            if(!users){
              res.status(404).json({
                message : "Could not Found"
              });
          } else{
            res.status(200).json({
              message: "You Searched for",
              data: users
            })
          }
          } catch (error) {
            res.status(500).json({ message: "Server Error" })
          }
    },

    deleteUserByID: async (req, res) => {
        try {
            const users = await User.findById(req.params.id, "-__v")
      
            if(users){
                users.deleteOne()
                res.status(201).json({
                    message: "Data Deleted"
                });
            }else{
                res.status(404).json({
                    message : "Could not Found"
                })
          }
          } catch (error) {
            res.status(500).json({ message: "Server Error" })
          }
    },
  
    updateUserByID: async (req, res) => {
        try {
            const users = await User.findById(req.params.id, "-__v")
      
            Object.assign(users, req.body)
            users.save();
            res.status(201).send({ 
              message : "Succes updated user!",
              data : users })
         
          } catch (error) {
            res.status(500).json({ message: "Server Error" })
          }
        }
}