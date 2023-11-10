$(document).ready(function() {
    const taskInput = $('#task');
    const addButton = $('#add-button');
    const taskList = $('#todo-list');

    addButton.on('click', addTask);
    taskInput.on('keyup', function(event) {
    if (event.key === 'Enter') {
    addTask();
    }
});

    function addTask() {
    const taskText = taskInput.val().trim();
    if (taskText === '') {
    return;
    }

    const listItem = $('<li></li>');
    listItem.html(`
    <span>${taskText}</span>
    <button class="remove-button">Удалить</button>`);

    listItem.find('.remove-button').on('click', function() {
    listItem.remove();
});
    
    taskList.append(listItem);
    taskInput.val('');
    }
});
    