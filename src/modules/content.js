import { getProject, projects, selectedProject } from "./projects.js";
import { createElement } from "./addTask.js";

function createTaskElements(taskTitle, taskDesc, taskDueDate, taskPriority){
    const title = createElement('div', { id: 'taskItemTitle' });
    const desc = createElement('div', { id: 'taskItemDesc' });
    const dueDate = createElement('div', { id: 'taskItemDueDate' });
    const priority = createElement('div', { id: 'taskItemPriority' });

    return { title, desc, dueDate, priority };
}

export function renderTasks() {
    const tasksContainer = document.getElementById("tasksContainer");
    const content = document.getElementById('content');
    const existingh3 = content.querySelector('h3');
    content.removeChild(existingh3);
    tasksContainer.innerHTML = "";
    const projectToShow = getProject(selectedProject);

    if (selectedProject) {
        console.log('Creating DOM elements for tasks');
        const newh3 = createElement('h3');
        newh3.textContent = `Tasks for project: ${selectedProject}`;
        content.insertBefore(newh3, content.firstChild);

        projectToShow.tasks.forEach(task => {
            const taskItem = createElement('div', {class: 'taskItem'});
            const { title, desc, dueDate, priority } = createTaskElements(task.title, task.desc, task.dueDate, task.priority);

            title.textContent = `Title: ${task.title}`;
            desc.textContent = `Description: ${task.desc}`;
            dueDate.textContent = `Due Date: ${task.dueDate}`;
            priority.textContent = `Priority: ${task.priority}`;

            taskItem.appendChild(title);
            taskItem.appendChild(desc);
            taskItem.appendChild(dueDate);
            taskItem.appendChild(priority);

            tasksContainer.appendChild(taskItem);
        });
    } else {
        alert('no project selected. somehow')
    }
}

export function renderAllTasks(){
    projects.forEach(project => {
        project.tasks.forEach(task => {
            
        })
    })
}