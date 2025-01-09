import { getProject, projects, selectedProject } from "./projects.js";
import { createElement } from "./addTask.js";
export function renderTasks() {
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    content.removeChild(existingh3);
    tasksContainer.innerHTML = "";
    const projectToShow = getProject(selectedProject);

    if (selectedProject) {
        console.log('Creating DOM elements for tasks');
        const newh3 = createElement('h3');
        newh3.textContent = `Tasks for project: ${selectedProject}`;
        content.insertBefore(newh3, content.firstChild);

        projectToShow.tasks.forEach(task => {
            const taskItem = createElement('div', {class: 'taskItem'});
            taskItem.textContent = task.title;
            tasksContainer.appendChild(taskItem);
        });
    } else {
        alert('no project selected. somehow')
    }
}