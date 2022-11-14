const express = require('express');
const router = express.Router();

const {
    getAllTodo,
    getTodoByID,
    addTodo,
    deleteTodoByID,
    updateTodoByID,
  } = require("../controller/todo.controller");

router.get("/", getAllTodo);
router.get("/:id", getTodoByID);
router.post("/add", addTodo);
router.delete("/:id", deleteTodoByID);
router.put("/:id", updateTodoByID);

module.exports = router;