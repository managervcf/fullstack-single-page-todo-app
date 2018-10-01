var mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.connect("mongodb://localhost/todo-api", {useNewUrlParser: true});
mongoose.Promise = Promise;

var todoModel = require("./todo");
module.exports = todoModel;