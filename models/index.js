const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/todo-api', {useNewUrlParser: true});

mongoose.set('debug', true);

mongoose.Promise = Promise;

const todoModel = require('./todo');

module.exports = todoModel;