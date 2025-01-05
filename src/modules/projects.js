import { showForm, hideForm } from "./addTask";
let projects = [];

function Project(id, name) {
    return {
        id, 
        name,
        tasks: [],
    }
}

function addProjectToSidebar(projectName){
    const projectsSidebarContainer = document.getElementById('projectsSidebarContainer');
    const projectButton = document.createElement('button');
    projectButton.textContent = projectName;
    projectsSidebarContainer.appendChild(projectButton);
}

function addProjectForm(){
    const form = createElement('form', { id: 'projectForm' });

    const projectLabel = createLabel('projectName', 'Project name: ');
    const projectInput = createInput('projectName', 'text', `Enter your project's name`, true); // title is required

    const projectSubmitButton = createElement('button', { type: 'submit' });
    projectSubmitButton.textContent = 'Submit';

    form.append(projectLabel, projectInput, submitButton);

    return form;
}

export function addProject(name){
    const newProject = Project(projects.length+1, name);
    addProjectToSidebar(name);
    projects.push(newProject);
}

export function addTasktoProject(projectName, task){
    const project = projects.find(p => p.id === projectName);
    if(project) {
        project.tasks.push(task);
    } else {
        alert(`Project not found, couldn't add task.`);
    }
}

export function printProjects() {
    return [...projects];
}