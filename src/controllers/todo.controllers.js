const express = require("express");
const ToDo = require("../models/todo.model");
const { getPagination } = require("../services/pagination/pagination");

// get all todos

const getAllTodos = async (req, res) => {
  try {
    const { skip, limit } = getPagination(req.query);
    const todos = await ToDo.find({}, { __v: 0 }).skip(skip).limit(limit);
    if (!todos || todos.length === 0) {
      return res.status(404).json({ error: "No todo found, create new todo" });
    }
    return res.status(200).json(todos);
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Something went wrong" });
  }
};

// create new todo
const createTodo = async (req, res) => {
  const { title, description } = req.body;

  const sanitizedTodoData = {
    title: req.sanitize(title),
    description: req.sanitize(description),
  };

  try {
    const todo = await new ToDo(sanitizedTodoData);
    if (!todo) {
      return res.status(400).json({ error: "something went wrong" });
    }
    todo.save();
    return res
      .status(200)
      .json({ message: "New todo created successfully", todo });
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
};

// delete todo by id
const deleteTodo = async (req, res) => {
  const { todoId } = req.params;
  try {
    const todo = await ToDo.findByIdAndDelete(todoId);
    if (!todo) {
      return res.status(404).json({ error: "todo does not exist" });
    }
    return res
      .status(200)
      .json({ message: `todo with id ${todoId} deleted succesfully ` });
  } catch (error) {
    res.status(400).json({ error: "Something went wrong" });
  }
};

// update todo by id
const updateTodo = async (req, res) => {
  const { todoId } = req.params;
  const { title, description } = req.body;
  const sanitizedTodoData = {
    title: req.sanitize(title),
    description: req.sanitize(description),
  };
  try {
    const todo = await ToDo.findByIdAndUpdate(todoId, sanitizedTodoData);
    if (!todo) {
      return res.status(400).json({ error: "todo update failed" });
    }
    return res.status(200).json({ message: "todo updated successfully", todo });
  } catch (error) {
    res.status(400).json({ error: "something went wrong" });
  }
};

module.exports = {
  getAllTodos,
  createTodo,
  deleteTodo,
  updateTodo,
};
