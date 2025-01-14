import { projects, Project } from "./projects";
import { renderAllTasks } from "./content";
import { toggleAddTaskButton } from "./addTask";
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

export function clearLocalStorage(){
    
}
