export function renderTasks() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    if (selectedProject) {
        const title = document.createElement("h3");
        title.textContent = `Tasks for project: ${selectedProject.name}`;
        taskList.appendChild(title);

        selectedProject.tasks.forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.textContent = task;
            taskList.appendChild(taskItem);
        });
    } else {
        taskList.textContent = "No project selected.";
    }
}