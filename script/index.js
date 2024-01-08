let taskInput = document.getElementById('task-input');
const add = document.getElementById('add-task');
const taskList = document.getElementById('task-list');

const addTask = () => {
    let task = taskInput.value;
    if (task) {
        let li = document.createElement('li');
        let del = document.createElement('button');
        let update = document.createElement('button');
        li.innerHTML = task;
        li.classList.add('list-group-item');
        del.classList.add('btn');
        del.classList.add('btn-danger');
        del.innerText = 'Delete';
        taskList.appendChild(li);
        taskList.appendChild(del);
        taskInput.value = '';
    }
}

taskList.addEventListener('click', function(event) {
    if (event.target.classList.contains('btn-danger')) {
        event.target.previousElementSibling.remove();
        event.target.remove();
    }
});

add.addEventListener('click', addTask);