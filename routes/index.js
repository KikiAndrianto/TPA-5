const express = require('express');
const router = express.Router();

const userRouter = require('./user.route')
const loginRouter = require('./login.route')
const todoRouter = require('./todo.route')
const verifyToken = require('../middlewares/verify');

router.use('/user', userRouter)
router.use('/login', loginRouter)
router.use('/todo', verifyToken, todoRouter)

module.exports = router