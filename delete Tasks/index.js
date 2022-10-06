
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
function deleteTask () {
    const inputForm = document.getElementById("input");

    inputForm.addEventListener("submit", (event) => {
        const inputFormData = new FormData(inputForm);

        fetch(`http://localhost:3000/task/${inputFormData.get("id")}`,{
            method:'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
        })
        .then((response) => {
            if(response.ok){
                alert('ToDo with the id: ' + document.getElementById('id').value + ' has been deleted')
            }
            else{
                alert('Something went wrong :( Check if ID exists')
            }
            return response.json();

        })
        .then((data) => {
            renderTask(data)

        })
    });
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
    
document.addEventListener("DOMContentLoaded", () => {
    indexTasks()
    deleteTask();
});