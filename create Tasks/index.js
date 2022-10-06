function createTask(task) {
    fetch('http://localhost:3000/tasks',{
        method: 'POST',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(task)
    })
    .then()
}
function createCell(text) {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
}
function renderTask(task) {    
    const tableBody = document.querySelector('tbody');
    task.forEach((task) => {
        const tableRow = document.createElement('td');
        tableRow.append(createCell(task.id)),
        tableRow.append(createCell(task.title)),
        tableRow.append(createCell(task.completed));
        tableBody.appendChild(tableRow);
    })
}   
function indexTasks() {
    fetch('http://localhost:3000/tasks')
    .then((response) => response.json())
    .then((data) => renderTask(data))
}

document.addEventListener("DOMContentLoaded", () => {
    const _idInput = document.getElementById("id");
    const todoInput = document.getElementById("todo");
    const status = document.getElementById("status");
    document.addEventListener('submit', (event) =>{
        event.preventDefault();
        createTask({id: _idInput.value, title: todoInput.value, completed: status.value})
        alert(_idInput.value)
        alert(todoInput.value)
        alert(status.value)
        indexTasks();
    });


})
