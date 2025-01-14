import './styles.css'
import { addProjectFormHandler, setSelectedProject, projects } from './modules/projects.js'
import { addTaskFormHandler } from './modules/addTask.js'
import { initializeProjects } from './modules/localStorage.js';
import { sidebarButtonsHandler, renderSidebar, renderWebsiteButtons } from './modules/sidebar.js';

initializeProjects();
setSelectedProject(projects[0].name);

renderWebsiteButtons();
renderSidebar();

// brings up form when addTaskBtn is pressed
addTaskFormHandler();

// brings up form when addProjectBtn is pressed
addProjectFormHandler();

// adds event handlers to sidebarButtons
sidebarButtonsHandler();