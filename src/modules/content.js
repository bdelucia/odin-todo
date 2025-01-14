import { getProject, projects, selectedProject } from "./projects.js";
import { createElement, createTaskForm, showForm, hideForm, createOverlay, getFormValues } from "./addTask.js";
import deleteButtonSVG from "../assets/delete-svgrepo-com.svg";
import editButtonSVG from '../assets/edit-svgrepo-com.svg';
import { getTasksDueToday, getTasksDueThisWeek } from "./dates.js";
import { getImportantTasks } from "./priority.js";
// Create task elements and populate content
function createTaskItem(task, id) {
    const taskItem = createElement('div', { class: 'taskItem' });
    taskItem.dataset.id = id;

    switch (task.priority) {
        case 'low':
            taskItem.style.backgroundColor = '#A8E6A3'; // Pastel green
            taskItem.style.color = '#2F4F2F'; // Dark green for readability
            break;
        case 'medium':
            taskItem.style.backgroundColor = '#FFD54F'; // Pastel yellow
            taskItem.style.color = '#3E2A47'; // Dark brown for readability
            break;
        case 'high':
            taskItem.style.backgroundColor = '#FF8A80'; // Pastel red
            taskItem.style.color = '#660000'; // Dark red for readability
            break;
    }

    const projectTitle = createElement('text', { id: 'projectTitle' });
    projectTitle.textContent = task.projectName;
    taskItem.appendChild(projectTitle);

    const elements = [
        { id: 'taskItemTitle', label: 'Task', value: task.title },
        { id: 'taskItemDesc', label: 'Description', value: task.desc },
        { id: 'taskItemDueDate', label: 'Due Date', value: task.dueDate },
        { id: 'taskItemPriority', label: 'Priority', value: task.priority },
    ];

    elements.forEach(({ id, label, value }) => {
        const element = createElement('div', { id });
        if(!value || value === ''){
            value = "None provided."
        }
        element.textContent = `${label}: ${value}`;
        taskItem.appendChild(element);
    });

    const deleteTaskBtn = createElement('img', { src: deleteButtonSVG, class: 'delete-button' });
    deleteTaskBtn.addEventListener('click', () => {
        handleDeleteTask(id);
    });

    const editTaskBtn = createElement('img', { src: editButtonSVG, class: 'edit-button' });
    editTaskBtn.addEventListener('click', () => {
        handleEditTask(id);
    })

    const buttonContainer = createElement('div', { class: 'buttons-container' });
    buttonContainer.appendChild(editTaskBtn);
    buttonContainer.appendChild(deleteTaskBtn);
    taskItem.appendChild(buttonContainer);

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
        newh3.textContent = `${selectedProject} Tasks`;
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

export function renderImportantTasks(){
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    if (existingh3) content.removeChild(existingh3);
    tasksContainer.innerHTML = "";

    const newh3 = createElement('h3');
    newh3.textContent = `Tasks with High priority`;
    content.insertBefore(newh3, content.firstChild);

    const importantTasks = getImportantTasks();

    importantTasks.forEach((task, index) => {
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

function handleEditTask(taskId){
    const [projectName, taskIndex] = taskId.split('-');
    const project = projects.find(proj => proj.name === projectName);
    const task = project.tasks[taskIndex]; // Assuming tasks is an array

    // Create form and populate with existing task values
    const form = createTaskForm();

    const titleInput = form.querySelector('#title');
    const descInput = form.querySelector('#desc');
    const dueDateInput = form.querySelector('#dueDate');
    const prioritySelect = form.querySelector('#priority');

    titleInput.value = task.title;
    descInput.value = task.desc;
    dueDateInput.value = task.dueDate;
    prioritySelect.value = task.priority;

    // Create overlay and show form
    const overlay = createOverlay();
    document.body.appendChild(overlay);
    document.body.appendChild(form);
    showForm(form, overlay);

    // Handle form submission to update task
    form.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent form submission

        const updatedValues = getFormValues(form);
        task.title = updatedValues.taskTitle;
        task.desc = updatedValues.taskDesc;
        task.dueDate = updatedValues.taskDueDate;
        task.priority = updatedValues.taskPriority;

        // You can update your project/task state here (e.g., rerender UI or save to backend)
        hideForm(form, overlay);
        if(selectedProject === null){
            renderAllTasks()
        } else {
            renderTasks();
        }
    });

    // Close button listener (optional)
    const closeButton = form.querySelector('#close-button');
    closeButton.addEventListener('click', () => {
        hideForm(form, overlay);
    });
}