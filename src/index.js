import './styles.css'
import projectItem, { addProjectFormHandler } from './modules/projects.js'
import { addTaskFormHandler, createTaskForm } from './modules/addTask.js'
import { addProject, addTasktoProject,  printProjects} from './modules/projects.js';

addProject('Default Project');
// handles what happens when the add task button is pressed;
addTaskFormHandler();

addProjectFormHandler();