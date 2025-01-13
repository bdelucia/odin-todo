import { createOverlay, showForm, hideForm, createElement, createInput, createLabel, toggleAddTaskButton } from "./addTask";
import { renderSidebar } from "./sidebar";
import { renderTasks } from "./content";
import closeButtonSVG from "../assets/close-circle-svgrepo-com.svg";
export let projects = [];
export let selectedProject = null;

export function setSelectedProject(projectName){
    selectedProject = projectName;
    if(selectedProject === null){
        toggleAddTaskButton();
    }
}
function Project(id, name) {
    return {
        id, 
        name,
        tasks: [],
    }
}

export function getProject(projectName){
    return projects.find(project => project.name === projectName) || false;
}

function addProjectToSidebar(projectName){
    const projectsSidebarContainer = document.getElementById('projectsSidebarContainer');
    const projectButton = document.createElement('button');
    projectButton.textContent = projectName;
    projectsSidebarContainer.appendChild(projectButton);
}

function createProjectForm(){
    const form = createElement('form', { id: 'projectForm' });

    const closeBtn = createElement('img', { src: closeButtonSVG, id: 'close-button' });

    const projectLabel = createLabel('projectName', 'Project name: ');
    const projectInput = createInput('projectName', 'text', `Enter your project's name`, true); // title is required

    const projectSubmitBtn = createElement('button', { type: 'submit', id: 'projectSubmitBtn' });
    projectSubmitBtn.textContent = 'Submit';

    form.append(closeBtn, projectLabel, projectInput, projectSubmitBtn);

    return form;
}

export function addProject(name){
    const newProject = Project(projects.length+1, name);
    addProjectToSidebar(name);
    setSelectedProject(name);
    projects.push(newProject);
}

export function addTasktoProject(projectName, task) {
    const project = getProject(projectName);
    if (project) {
        // Check if a task with the same title already exists
        const duplicateTask = project.tasks.find(existingTask => existingTask.title === task.title);
        if (duplicateTask) {
            alert(`A task with the name "${task.title}" already exists in the project "${projectName}".`);
        } else {
            project.tasks.push(task);
            alert(`Task "${task.title}" added successfully to project "${projectName}".`);
        }
    }
}

function getProjectName(form){
    const projectName = form.querySelector('#projectName');
    return projectName.value;
}

export function addProjectFormHandler(){
    const form = createProjectForm();
    const overlay = createOverlay();

    const content = document.getElementById('content');
    const addProjectBtn = document.getElementById('addProjectBtn');

    const projectFormSubmitBtn = form.querySelector('#projectSubmitBtn');
    const closeBtn = form.querySelector('#close-button');
    const projectInput = form.querySelector('#projectName');

    // Event listeners for showing and hiding the form
    addProjectBtn.addEventListener('click', () => showForm(form, overlay));
    projectFormSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addProject(getProjectName(form));
        renderSidebar();
        hideForm(form, overlay);
        projectInput.value = "";
        printProjects();
        renderTasks();
    });
    closeBtn.addEventListener('click', () => {
        hideForm(form, overlay);
        projectInput.value = "";
    });

    // appends the overlay with the form to content, by default its invisible
    content.append(form, overlay);
}

export function printProjects() {
    return [...projects];
}