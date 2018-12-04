const Todo = require('../models');

exports.getTodos = (req, res) => {
  Todo.find()
    .then(todos => res.json(todos))
    .catch(err => res.send(err));
};

exports.createTodo = (req, res) => {
  Todo.create(req.body)
    .then(newTodo => res.status(201).json(newTodo))
    .catch(err => res.send(err));
};

exports.getTodo = (req, res) => {
  Todo.findById(req.params.todoId)
    .then(foundTodo => res.json(foundTodo))
    .catch(err => res.send(err));
};

exports.updateTodo = (req, res) => {
  Todo.findByIdAndUpdate(req.params.todoId, req.body, { new: true })
    .then(updatedTodo => res.json(updatedTodo))
    .catch(err => res.send(err));
};

exports.deleteTodo = (req, res) => {
  Todo.findByIdAndRemove(req.params.todoId)
    .then(() => res.json({ message: 'We deleted it' }))
    .catch(err => res.send(err));
};

module.exports = exports;
