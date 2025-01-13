import './styles.css'
import projectItem, { addProjectFormHandler } from './modules/projects.js'
import { addTaskFormHandler, createTaskForm } from './modules/addTask.js'
import { addProject, addTasktoProject,  printProjects} from './modules/projects.js';
import { sidebarButtonsHandler, renderSidebar } from './modules/sidebar.js';

addProject('Default Project');
renderSidebar();

// brings up form when addTaskBtn is pressed
addTaskFormHandler();

// brings up form when addProjectBtn is pressed
addProjectFormHandler();

// adds event handlers to sidebarButtons
sidebarButtonsHandler();