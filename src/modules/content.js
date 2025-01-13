import { getProject, projects, selectedProject } from "./projects.js";
import { createElement } from "./addTask.js";
import deleteButtonSVG from "../assets/delete-svgrepo-com.svg";
import { getTasksDueToday, getTasksDueThisWeek } from "./dates.js";
// Create task elements and populate content
function createTaskItem(task, id) {
    const taskItem = createElement('div', { class: 'taskItem' });
    taskItem.dataset.id = id;

    const projectTitle = createElement('text', { id: 'projectTitle' });
    projectTitle.textContent = task.projectName;
    taskItem.appendChild(projectTitle);

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

    const deleteTaskBtn = createElement('img', { src: deleteButtonSVG, class: 'delete-button' });
    deleteTaskBtn.addEventListener('click', () => {
        handleDeleteTask(id);
    });
    taskItem.appendChild(deleteTaskBtn);

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

        projectToShow.tasks.forEach((task, index) => {
            const taskId = `${selectedProject}-${index}`;
            const taskItem = createTaskItem(task, taskId);
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
        project.tasks.forEach((task, index) => {
            const taskId = `${project.name}-${index}`;
            const taskItem = createTaskItem(task, taskId);
            tasksContainer.appendChild(taskItem);
        });
    });
}

export function renderTasksDueToday(){
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    if (existingh3) content.removeChild(existingh3);
    tasksContainer.innerHTML = "";

    const newh3 = createElement('h3');
    newh3.textContent = `Tasks due today`;
    content.insertBefore(newh3, content.firstChild);

    const tasksDueToday = getTasksDueToday();

    tasksDueToday.forEach((task, index) => {
        const taskId = `${task.projectName}-${index}`;
        const taskItem = createTaskItem(task, taskId);
        tasksContainer.appendChild(taskItem);
    });
}

export function renderTasksDueThisWeek(){
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    if (existingh3) content.removeChild(existingh3);
    tasksContainer.innerHTML = "";

    const newh3 = createElement('h3');
    newh3.textContent = `Tasks due today`;
    content.insertBefore(newh3, content.firstChild);

    const tasksDueThisWeek = getTasksDueThisWeek();

    tasksDueThisWeek.forEach((task, index) => {
        const taskId = `${task.projectName}-${index}`;
        const taskItem = createTaskItem(task, taskId);
        tasksContainer.appendChild(taskItem);
    });
}

function handleDeleteTask(taskId){
    const [projectName, taskIndex] = taskId.split('-');
    const project = projects.find(proj => proj.name === projectName);

    if(project){
        project.tasks.splice(taskIndex, 1);
    } else {
        alert(`Project '${projectName}' not found`);
    }

    if (selectedProject) {
        if (selectedProject === projectName) {
            renderTasks();
        } else {
            console.log(`Selected project '${selectedProject}' does not match deleted task's project '${projectName}'.`);
        }
    } else {
        renderAllTasks();
    }
}