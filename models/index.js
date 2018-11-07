const mongoose = require('mongoose');

const databaseURL = process.env.DATABASEURL;

console.log(databaseURL);

mongoose.connect(databaseURL, {useNewUrlParser: true});
mongoose.set('debug', true);
mongoose.Promise = Promise;

const todoModel = require('./todo');

module.exports = todoModel;