/* global $ */
$(document).ready(() => {
  $.getJSON('/api/todos')
    .done(addTodos)
    .fail(printData);
    
  $('#todoInput').keypress((event) => {
    if (event.which === 13) {
        createTodo();
    }
  });
  
  $('.list').on('click', 'li', updateTodo);
  $('.list').on('click', 'span', deleteTodo);
});


function addTodos(todos) {
  todos.forEach(appendTodo);
}

function printData(data) {
  console.log(data);
}

function createTodo() {
  const userInput = $('#todoInput').val();
  $.post('/api/todos', {name: userInput})
  .done((newTodo) => {
    $('#todoInput').val('');
    appendTodo(newTodo);
  })
  .fail(printData);
}

function appendTodo(todo) {
  const newTodo = $(`<li>${todo.name}<span><i class="far fa-trash-alt"></i></span></li>`);
  newTodo.data('id', todo._id);
  newTodo.data('completed', todo.completed);
  newTodo.addClass('task');
  if (todo.completed) {
    newTodo.addClass("done");
  }
  $('.list').append(newTodo);
}
    
function deleteTodo(event) {
  event.stopPropagation();
  const that = $(this).parent();
  const deleteUrl = `/api/todos/${that.data('id')}`;
  $.ajax({
    method: 'DELETE',
    url: deleteUrl
  })
    .done(() => {
      that.remove();
    })
    .fail(printData);
}

function updateTodo() {
  const that = $(this);
  const updateUrl = `/api/todos/${that.data('id')}`;
  const isDone = that.data('completed');
  const updateData = {completed: !isDone};
  $.ajax({
    method: 'PUT',
    url: updateUrl,
    data: updateData
  })
    .done((updatedTodo) => {
      that.toggleClass('done');
      that.data('completed', !isDone);
    })
    .fail(printData);
}