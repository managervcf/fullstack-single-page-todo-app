const mongoose = require('mongoose');
const keys = require('../config');

mongoose.connect(
	keys.databaseURL,
	{ useNewUrlParser: true }
);

mongoose.set('debug', true);
mongoose.Promise = Promise;

// Exports Todo Model
module.exports = require('./todo');
