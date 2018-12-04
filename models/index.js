const mongoose = require('mongoose');
const keys = require('../config');
const db = keys.databaseURL;

mongoose.connect(
	db,
	{ useNewUrlParser: true }
);
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoModel = require('./todo');

module.exports = todoModel;
