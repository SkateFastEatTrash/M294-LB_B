
function createCell(text) {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
}
const renderTask = (task) =>  {    

    const tableBody = document.getElementById('display');
    const tableRow = document.createElement('tr');
    tableRow.append(createCell(task.id));
    tableRow.append(createCell(task.title));
    tableRow.append(createCell(task.completed));
    tableBody.appendChild(tableRow);
    
}
const renderTaskForIndex = (task) =>  {    

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
    fetch('http://localhost:3000/tasks')
    .then((response) => response.json())
    .then((data) => renderTaskForIndex(data))
}
function updateTask(){
    const _idInput = document.getElementById("id");
    const todoInput = document.getElementById("todo");
    const status = document.getElementById("status");

    document.addEventListener("submit", (event) => {

        fetch(`http://localhost:3000/tasks`, {
            method:'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
                id: _idInput.value,
                title: todoInput.value,
                completed : status.value
            })
        })
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            renderTask(data)
        })
    });

}
    
document.addEventListener("DOMContentLoaded", () => {
    indexTasks();
    updateTask();
});