function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    if (taskText === '') return;
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = 'task';
    li.innerHTML = `
                <input type="checkbox" onclick="toggleTask(this)">
                <span>${taskText}</span>
                <button onclick="deleteTask(this)"><img src = "https://cdn-icons-png.flaticon.com/512/9713/9713380.png" width = "20"></button>
            `;
    taskList.appendChild(li);
    taskInput.value = '';
}

function toggleTask(checkbox) {
    checkbox.nextElementSibling.classList.toggle('done', checkbox.checked);
}

function deleteTask(button) {
    button.parentElement.remove();
}