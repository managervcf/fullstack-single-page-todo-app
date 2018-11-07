const mongoose = require('mongoose');
const prodDatabaseURL = process.env.DATABASEURL;
const devDatabaseURL = 'mongodb://127.0.0.1:27017/todo-api'
const databaseURL = prodDatabaseURL || devDatabaseURL;

mongoose.connect(databaseURL, { useNewUrlParser: true });
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoModel = require('./todo');

module.exports = todoModel;