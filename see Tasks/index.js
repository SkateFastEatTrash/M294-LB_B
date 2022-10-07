
function createCell(text) {
    const cell = document.createElement('td');
    cell.innerText = text;
    return cell;
}
const renderTask = (task) =>  {    
    const tableBody = document.getElementById('display');
    const tableRow = document.createElement('tr');
    tableRow.append(createCell(task.id)),
    tableRow.append(createCell(task.title)),
    tableRow.append(createCell(task.completed));
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


document.addEventListener("DOMContentLoaded", () => {
    document.addEventListener("submit", (event) =>{
        event.preventDefault();
        searchTask();
    })

})