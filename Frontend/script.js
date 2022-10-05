const createCell = (cellText) => {
    const cell = document.createElement("td");
    cell.innerText = cellText;
    return cell
}

const addTask = (task) => {
    const display = document.getElementById("display");
    const tableRow = document.createElement("tr");

    tableRow.append(
        createCell(task.id),
        createCell(task.title),
        createCell(task.completed),
    );

    display.appendChild(tableRow);
};

document.addEventListener("DOMContentLoaded", () => {

    fetch("http://localhost:3000/tasks")
    .then((response) => {
        alert(response.value);
        return response.json();
    })
    .then((data) =>{
        addTask(data)
    })
});