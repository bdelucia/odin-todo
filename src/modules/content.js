import { getProject, projects, selectedProject } from "./projects.js";
export function renderTasks() {
    const tasksContainer = document.getElementById("tasksContainer");
    tasksContainer.innerHTML = "";
    const projectToShow = getProject(selectedProject);

    if (selectedProject) {
        console.log('Creating DOM elements for tasks');
        const title = document.createElement("h3");
        title.textContent = `Tasks for project: ${selectedProject}`;
        tasksContainer.appendChild(title);

        projectToShow.tasks.forEach(task => {
            const taskItem = document.createElement("div");
            taskItem.textContent = task.title;
            tasksContainer.appendChild(taskItem);
        });
    } else {
        alert('no project selected. somehow')
    }
}