/* global $ */
$(document).ready(function() {
    
    // On Page Load
    $.getJSON("/api/todos")
    .done(addTodos)
    .fail(printData);

    // Event Listeners
    $("#todoInput").keypress(function(event) {
        if(event.which === 13) {
            createTodo();
        }
    });
    $(".list").on("click", "li", updateTodo);
    $(".list").on("click", "span", deleteTodo);
});

// Declared Fuctions
function addTodos(todos) {
    console.log(todos);
    todos.forEach(appendTodo);
}

function printData(data) {
    console.log(data);
}

function createTodo() {
    var userInput = $("#todoInput").val();
    $.post("/api/todos", {name: userInput})
    .done(function(newTodo) {
        $("#todoInput").val("");
        appendTodo(newTodo);
    })
    .fail(printData);
}

function appendTodo(todo) {
        var newTodo = $("<li>" + todo.name + "<span>x</span></li>");
        newTodo.data("id", todo._id);
        newTodo.data("completed", todo.completed);
        newTodo.addClass("task");
        if(todo.completed) {
            newTodo.addClass("done");
        }
        $(".list").append(newTodo);
    }
    
function deleteTodo(event) {
    event.stopPropagation();
    var that = $(this).parent();
    var deleteUrl = "/api/todos/" + that.data("id");
    $.ajax({
        method: "DELETE",
        url: deleteUrl
    })
    .done(function() {
        that.remove();
    })
    .fail(printData);
}

function updateTodo() {
    var that = $(this);
    var updateUrl = "/api/todos/" + that.data("id");
    var isDone = that.data("completed");
    var updateData = {completed: !isDone};
    console.log(updateData);
    $.ajax({
        method: "PUT",
        url: updateUrl,
        data: updateData
    })
    .done(function(updatedTodo) {
        that.toggleClass("done");
        that.data("completed", !isDone);
    })
    .fail(printData);
}