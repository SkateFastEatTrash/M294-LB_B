
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
function updateTask () {

}
    
document.addEventListener("DOMContentLoaded", () => {
    const inputForm = document.getElementById("input");
    const todoInput = document.getElementById("todo");
    const status = document.getElementById("status");

    inputForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const inputFormData = new FormData(inputForm);

        fetch(`http://localhost:3000/task/${inputFormData.get("id")}`,{
            method:'PUT',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({
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

});