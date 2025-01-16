import './styles.css';
import {
  addProjectFormHandler,
  setSelectedProject,
  projects,
  addTasktoProject,
} from './modules/projects.js';
import { addTaskFormHandler, createTask } from './modules/addTask.js';
import { initializeProjects } from './modules/localStorage.js';
import { renderTasks } from './modules/content.js';
import {
  sidebarButtonsHandler,
  renderSidebar,
  renderWebsiteButtons,
} from './modules/sidebar.js';

initializeProjects();
setSelectedProject(projects[0].name);

if (!projects[0].tasks.length) {
  addTasktoProject(
    'Unlisted',
    createTask('Example Task', "I'm an example task!", '02/27/2002', 'none'),
  );
  addTasktoProject(
    'Unlisted',
    createTask(
      'Example Low Priority Task',
      "I'm an example task!",
      '02/27/2002',
      'low',
    ),
  );
  addTasktoProject(
    'Unlisted',
    createTask(
      'Example Medium Priority Task',
      "I'm an example task!",
      '02/27/2002',
      'medium',
    ),
  );
  addTasktoProject(
    'Unlisted',
    createTask(
      'Example High Priority Task',
      "I'm an example task!",
      '02/27/2002',
      'high',
    ),
  );
  renderTasks();
}

renderTasks();

renderWebsiteButtons();
renderSidebar();

// brings up form when addTaskBtn is pressed
addTaskFormHandler();

// brings up form when addProjectBtn is pressed
addProjectFormHandler();

// adds event handlers to sidebarButtons
sidebarButtonsHandler();
