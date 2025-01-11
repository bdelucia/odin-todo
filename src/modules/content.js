import { getProject, projects, selectedProject } from "./projects.js";
import { createElement } from "./addTask.js";
import deleteButtonSVG from "../assets/delete-svgrepo-com.svg";
// Create task elements and populate content
function createTaskItem(task) {
    const taskItem = createElement('div', { class: 'taskItem' });
    const deleteTaskBtn = createElement('img', { src: deleteButtonSVG, id: 'delete-button' });
    taskItem.appendChild(deleteTaskBtn);

    const elements = [
        { id: 'taskItemTitle', label: 'Title', value: task.title },
        { id: 'taskItemDesc', label: 'Description', value: task.desc },
        { id: 'taskItemDueDate', label: 'Due Date', value: task.dueDate },
        { id: 'taskItemPriority', label: 'Priority', value: task.priority },
    ];

    elements.forEach(({ id, label, value }) => {
        const element = createElement('div', { id });
        element.textContent = `${label}: ${value}`;
        taskItem.appendChild(element);
    });

    return taskItem;
}

export function renderTasks() {
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    if (existingh3) content.removeChild(existingh3);
    tasksContainer.innerHTML = "";

    if (selectedProject) {
        const projectToShow = getProject(selectedProject);

        const newh3 = createElement('h3');
        newh3.textContent = `Tasks for project: ${selectedProject}`;
        content.insertBefore(newh3, content.firstChild);

        projectToShow.tasks.forEach(task => {
            const taskItem = createTaskItem(task);
            tasksContainer.appendChild(taskItem);
        });
    } else {
        alert('No project selected. Please select a project.');
    }
}

export function renderAllTasks() {
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    if (existingh3) content.removeChild(existingh3);
    tasksContainer.innerHTML = "";

    const newh3 = createElement('h3');
    newh3.textContent = `All tasks`;
    content.insertBefore(newh3, content.firstChild);

    projects.forEach(project => {
        project.tasks.forEach(task => {
            const taskItem = createTaskItem(task);
            tasksContainer.appendChild(taskItem);
        });
    });
}