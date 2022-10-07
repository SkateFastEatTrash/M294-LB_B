

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
    cell.innerHTML = text;
    return cell;
}
function deleteTask(id){
    fetch(`http://localhost:3000/task/${id}`, {
        method:'DELETE',
        headers:{
            'Content-Type' : 'application/json'
        }
    })
    .then((response) => {
        if(response.ok){
            alert('ToDo with the id: ' + id + ' has been deleted')
        }
        else{
            alert('Something went wrong :( Check if ID exists')
        }
        return response.json();
    })
    location.reload();
}
function updateTask (_id) {
    const newTitle = {id : _id, title: `${prompt('Please enter new title')}`, completed: `${prompt('true / talse')}`}
    fetch(`http://localhost:3000/tasks`, {
        method:'PUT',
        headers: {
            'Content-Type' : 'application/json'
        },
        body: JSON.stringify(newTitle)
    })
    .then((response) => {
        return response.json();
    })
    location.reload();
}
const renderTask = (task) =>  {    

    for(let i = 0; i <= task.length - 1; i++) {
        const tableBody = document.getElementById('display');
        const tableRow = document.createElement('tr');
        tableRow.append(createCell(task[i].id)),
        tableRow.append(createCell(task[i].title)),
        tableRow.append(createCell(task[i].completed));
        tableRow.append(createCell(`<button id="delete" type="button" onClick="deleteTask(${task[i].id})">Delete</button>`))
        tableRow.append(createCell(`<button id="update" type="button" onClick="updateTask(${task[i].id})">Update</button>`))
        tableBody.appendChild(tableRow);
    }
    
}   


function indexTasks() {
    fetch('http://localhost:3000/tasks')
    .then((response) => response.json())
    .then((data) => renderTask(data))
}
function checkLogged() {
    const elementWhenLoggedIn = document.getElementById("loggedIn")
    const elementWhenNotLoggedIn = document.getElementById("notLoggedIn")

    fetch("http://127.0.0.1:3000/auth/cookie/status", {
        credentials: "include"
    })
    .then((response) => {
        if(response.status === 401) {
            elementWhenLoggedIn.classList.add("hidden")
            elementWhenNotLoggedIn.classList.remove("hidden")
        } else {
            elementWhenLoggedIn.classList.remove("hidden")
            elementWhenNotLoggedIn.classList.add("hidden")
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    const _idInput = document.getElementById("id");
    const todoInput = document.getElementById("todo");
    const status = document.getElementById("status");
    
    indexTasks();
    checkLogged();
        document.getElementById("login").addEventListener("submit", (event) => {
        const email = document.getElementById("email_input").value
        const password = document.getElementById("password_input").value
        const login = {email, password}

        fetch("http://127.0.0.1:3000/auth/cookie/login", {
            method: "POST",
            credentials: "include",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(login)
        })
    })
    document.addEventListener('submit', (event) =>{
        createTask({id: _idInput.value, title: todoInput.value, completed: status.value})

    })
})