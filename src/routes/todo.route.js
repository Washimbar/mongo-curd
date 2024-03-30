const express = require('express');
const { getTodo, createTodo, updateTodo, deleteTodo } = require('../controllers');

const todoRoute = express.Router();

todoRoute.get('/getTodo', getTodo)
todoRoute.post('/createTodo', createTodo)
todoRoute.post("/updateTodo/:id", updateTodo);
todoRoute.delete("/deleteTodo/:id", deleteTodo);

module.exports = todoRoute