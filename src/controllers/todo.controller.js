const { TodoModel } = require("../models");

const getTodo = async (req, res) => {
	try {
		const todos = await TodoModel.find();
		res.status(200).send({ todos });
	} catch (error) {
		res.status(500).send(error.message);
	}
};
const createTodo = async (req, res) => {
	try {
		const todo = new TodoModel({
			title: req.body.title,
			description: req.body.description,
		});
		const newTodo = await todo.save();
		res.status(201).send(newTodo);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
const updateTodo = async (req, res) => {
	try {
		res.status(200).send(req.body);
	} catch (error) {
		res.status(500).send(error.message);
	}
};
const deleteTodo = async (req, res) => {
    try {
        const todo = await TodoModel.findByIdAndDelete(req.params.id);
		res.status(200).send(todo);
	} catch (error) {
		res.status(500).send(error.message);
	}
};

module.exports = {
	getTodo,
	updateTodo,
	deleteTodo,
	createTodo,
};
