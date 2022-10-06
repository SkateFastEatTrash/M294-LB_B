
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
        event.preventDefault();
        const inputFormData = new FormData(inputForm);

        fetch(`http://localhost:3000/task/${inputFormData.get("id")}`,{
            method:'DELETE',
            headers: {
                'Content-Type' : 'application/json'
            }
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
    deleteTask();
});