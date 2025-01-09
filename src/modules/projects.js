import { createOverlay, showForm, hideForm, createElement, createInput, createLabel } from "./addTask";
import { renderSidebar } from "./sidebar";
import { renderTasks } from "./content";
export let projects = [];
export let selectedProject = null;

export function setSelectedProject(projectName){
    selectedProject = projectName;
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

    const projectLabel = createLabel('projectName', 'Project name: ');
    const projectInput = createInput('projectName', 'text', `Enter your project's name`, true); // title is required

    const projectSubmitBtn = createElement('button', { type: 'submit', id: 'projectSubmitBtn' });
    projectSubmitBtn.textContent = 'Submit';

    form.append(projectLabel, projectInput, projectSubmitBtn);

    return form;
}

export function addProject(name){
    const newProject = Project(projects.length+1, name);
    addProjectToSidebar(name);
    setSelectedProject(name);
    projects.push(newProject);
}

export function addTasktoProject(projectName, task){
    const project = getProject(projectName);
    if(project) {
        project.tasks.push(task);
    } else {
        alert(`Project not found, couldn't add task.`);
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

    // Event listeners for showing and hiding the form
    addProjectBtn.addEventListener('click', () => showForm(form, overlay));
    projectFormSubmitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        addProject(getProjectName(form));
        renderSidebar();
        hideForm(form, overlay);
        printProjects();
        renderTasks();
    });

    // appends the overlay with the form to content, by default its invisible
    content.append(form, overlay);
}

export function printProjects() {
    return [...projects];
}