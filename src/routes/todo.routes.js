const express = require("express");
const {
  createTodo,
  getAllTodos,
  deleteTodo,
  updateTodo,
} = require("../controllers/todo.controllers");
const { validateTodoData } = require("../middlewares/index");
const router = express.Router();

router.get("/", getAllTodos);
router.post("/create", validateTodoData, createTodo);
router.put("/:todoId", validateTodoData, updateTodo);
router.delete("/:todoId", deleteTodo);

module.exports = router;
