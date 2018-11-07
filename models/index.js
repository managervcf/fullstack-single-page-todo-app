const mongoose = require('mongoose');

const databaseURL = process.env.DATABASEURL || 'mongodb://127.0.0.1:27017/todo-api'

mongoose.connect(databaseURL, {useNewUrlParser: true});
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoModel = require('./todo');

module.exports = todoModel;