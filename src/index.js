import './styles.css'
import { addProjectFormHandler, setSelectedProject, projects } from './modules/projects.js'
import { addTaskFormHandler, createTaskForm, toggleAddTaskButton } from './modules/addTask.js'
import { addProject, addTasktoProject,  printProjects} from './modules/projects.js';
import { initializeProjects } from './modules/localStorage.js';
import { sidebarButtonsHandler, renderSidebar } from './modules/sidebar.js';

//addProject('Unlisted');
 
initializeProjects();
setSelectedProject(projects[0].name);

renderSidebar();

// brings up form when addTaskBtn is pressed
addTaskFormHandler();

// brings up form when addProjectBtn is pressed
addProjectFormHandler();

// adds event handlers to sidebarButtons
sidebarButtonsHandler();