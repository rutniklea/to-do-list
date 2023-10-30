function addTask() {
    const newTaskText = document.getElementById("new-task").value;
    if (newTaskText.trim() === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const li = document.createElement("li");
    li.innerHTML = `
        <span class="task-text">${newTaskText}</span>
        <button class="delete-button" onclick="removeTask(this)">Delete</button>
    `;
    taskList.appendChild(li);

    document.getElementById("new-task").value = "";
}

function removeTask(button) {
    const li = button.parentElement;
    li.remove();
}