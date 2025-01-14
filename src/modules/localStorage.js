import { projects, Project } from "./projects";
import { renderAllTasks } from "./content";
import { toggleAddTaskButton, showForm, hideForm, createOverlay, createElement } from "./addTask";
export function initializeProjects() {
    const storedProjects = localStorage.getItem('projects');
    if (!storedProjects || JSON.parse(storedProjects).length === 0) {
        // Add a default project
        const defaultProject = Project(1, 'Unlisted');
        projects.push(defaultProject);
        localStorage.setItem('projects', JSON.stringify(projects));
    } else {
        // Clear the current array and populate it with stored projects
        const loadedProjects = JSON.parse(storedProjects);
        projects.length = 0;
        projects.push(...loadedProjects); 
        toggleAddTaskButton();
        renderAllTasks();
    }
}

export function saveProjectsToStorage() {
    localStorage.setItem('projects', JSON.stringify(projects));
}

export function createConfirmationForm() {
    // Create the overlay and form container
    const overlay = createOverlay();
    const form = createElement('form', { id: 'confirmation-form' });

    // Create the description paragraph
    const description = createElement('p');
    description.textContent = 'This action will reset all projects and tasks. Are you sure you want to continue?';
    
    // Create the continue button
    const continueButton = createElement('button', {type: 'submit'});
    continueButton.textContent = 'Continue';
    continueButton.addEventListener('click', () => {
        // Handle the action (resetting projects and tasks or other logic)
        localStorage.clear();
        hideForm(form, overlay); // Hide the form after confirmation
    });

    // Create the cancel button (optional, for user to cancel the action)
    const cancelButton = createElement('button', {type: 'submit'});
    cancelButton.textContent = 'Cancel';
    cancelButton.addEventListener('click', () => {
        hideForm(form, overlay); // Just hide the form without doing anything
    });

    // Append elements to the form
    form.appendChild(description);
    form.appendChild(continueButton);
    form.appendChild(cancelButton);
    
    // Append the form and overlay to the body
    document.body.appendChild(overlay);
    document.body.appendChild(form);
    
    return form;
}

export function clearLocalStorage(){

}
