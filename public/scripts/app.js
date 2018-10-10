/* global $ */
$(document).ready(() => {
  $.getJSON('/api/todos')
    .done(displayAllTodos)
    .fail(printError);
    
  $('#todoInput').keypress((event) => {
    if (event.which === 13) {
        createTodo();
    }
  });
  
  $('.list').on('click', 'li', updateTodo);
  $('.list').on('click', 'span', deleteTodo);
});


function displayAllTodos(todos) {
  todos.forEach(appendTodo);
}

function printError(err) {
  let message = `Status code: ${err.status} => ${err.statusText}`;
  console.log(message);
}

async function createTodo() {
  let userInput = $('#todoInput').val();
  try {
    let newTodo = $.post('/api/todos', {name: userInput});
    $('#todoInput').val('');
    appendTodo(await newTodo);
  }
  catch (err) {
    printError(err);
  }
}

function appendTodo(todo) {
  let newTodo = $(`<li>${todo.name}<span><i class="far fa-trash-alt"></i></span></li>`);
  newTodo.addClass('task');
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}
    
async function deleteTodo(event) {
  event.stopPropagation();
  let that = $(this).parent();
  let deleteUrl = `/api/todos/hhh${that.data('id')}`;
  try {
    await $.ajax({ method: 'DELETE', url: deleteUrl });
    that.remove();
  }
  catch (err) {
    printError(err);
  }
}

async function updateTodo() {
  let that = $(this);
  let updateUrl = `/api/todos/${that.data('id')}`;
  let isDone = that.data('completed');
  let updateData = {completed: !isDone};
  try {
    await $.ajax({ method: 'PUT', url: updateUrl, data: updateData });
    that.toggleClass('done');
    that.data('completed', !isDone);
  }
  catch (err) {
    printError(err);
  }
}