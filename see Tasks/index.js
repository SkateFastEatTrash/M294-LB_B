
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

    indexTasks();
})