
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
function openPage(){
    window.location = 'delete Tasks/index.html'
}
function createCell(text) {
    const cell = document.createElement('td');
    cell.innerHTML = text;
    return cell;
}
const renderTask = (task) =>  {    

    for(let i = 0; i <= task.length - 1; i++) {
        const tableBody = document.getElementById('display');
        const tableRow = document.createElement('tr');
        tableRow.append(createCell(task[i].id)),
        tableRow.append(createCell(task[i].title)),
        tableRow.append(createCell(task[i].completed));
        tableRow.append(createCell('<button onclick="openPage">Delete'))
        tableBody.appendChild(tableRow);
    }
    
    
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
    
    indexTasks();
    document.addEventListener('submit', (event) =>{
        createTask({id: _idInput.value, title: todoInput.value, completed: status.value})

    });
})