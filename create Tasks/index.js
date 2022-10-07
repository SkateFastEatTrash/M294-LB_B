function createTask(task) {
    fetch('http://127.0.0.1:3000/auth/cookie/tasks',{
        method: 'POST',
        credentials: "include",
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
const renderTask = (task) =>  {    

    for(let i = 0; i <= task.length - 1; i++) {
        const tableBody = document.getElementById('display');
        const tableRow = document.createElement('tr');
        tableRow.append(createCell(task[i].id)),
        tableRow.append(createCell(task[i].title)),
        tableRow.append(createCell(task[i].completed));
        tableBody.appendChild(tableRow);
    }
    
    
}   
function indexTasks() {
    fetch('http://127.0.0.1:3000/auth/cookie/tasks', {
        credentials: "include"
    })
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
