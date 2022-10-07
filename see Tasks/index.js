
function createCell(text) {
    const cell = document.createElement('td');
    cell.innerHTML = text;
    return cell;
}
const renderTask = (task) =>  {    
    const tableBody = document.getElementById('display');
    const tableRow = document.createElement('tr');
    tableRow.append(createCell(task.id)),
    tableRow.append(createCell(task.title)),
    tableRow.append(createCell(task.completed));
    tableRow.append(createCell(`<button id="delete" type="button" onClick="deleteTask(${task.id})">Delete</button>`));
    tableRow.append(createCell(`<button id="update" type="button" onClick="updateTask(${task.id})">Update</button>`));
    tableBody.appendChild(tableRow);
    
}   

function searchTask() {
    const form = document.getElementById("input");
    const formData = new FormData(form)
    fetch(`http://127.0.0.1:3000/auth/cookie/task/${formData.get("id")}`, {
        credentials: "include",
    })
    .then((response) => response.json())
    .then((data) => renderTask(data))
}

function deleteTask(id){
    fetch(`http://127.0.0.1:3000/auth/cookie/task/${id}`, {
        method:'DELETE',
        credentials: "include",
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
    fetch(`http://127.0.0.1:3000/auth/cookie/tasks`, {
        method:'PUT',
        credentials: "include",
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




document.addEventListener("DOMContentLoaded", () => {

    document.addEventListener("submit", (event) =>{
        event.preventDefault();
        searchTask();
    })

})