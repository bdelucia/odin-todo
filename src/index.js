import './styles.css'
import projectItem from './modules/projects.js'
import { addTaskFormHandler, createTaskForm } from './modules/addTask.js'
import { addProject, addTasktoProject,  printProjects} from './modules/projects.js';

// default project for user to add tasks into
addProject('Default Project');

// handles what happens when the add task button is pressed;
addTaskFormHandler();