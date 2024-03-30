const { TodoModel } = require("../models");

const getTodo = async (req, res) => {
	try {
		const todos = await TodoModel.find();
		res.json(todos);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const createTodo = async (req, res) => {
	const todo = new TodoModel({
		title: req.body.title,
		description: req.body.description,
	});
	try {
		const newTodo = await todo.save();
		res.status(201).json(newTodo);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const updateTodo = async (req, res) => {
	try {
		const updatedTodo = await TodoModel.findByIdAndUpdate(
			req.params.id,
			req.body,
			{ new: true }
		);
		res.send({ updatedTodo, message: "Todo updated" });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

const deleteTodo = async (req, res) => {
	try {
		const deletedTodo = await TodoModel.findByIdAndDelete(req.params.id);
		res.send({ deletedTodo, message: "Todo deleted" });
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = { getTodo, updateTodo, deleteTodo, createTodo };
