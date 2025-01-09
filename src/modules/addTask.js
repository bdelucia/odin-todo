import { projects, selectedProject, setSelectedProject, addTasktoProject, getProject } from "./projects.js";
import { renderTasks } from "./content.js";
// creates an element of type, with optional attributes as an object
export function createElement(type, attributes = {}) {
    const element = document.createElement(type);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

// creates an input
export function createInput(id, type, placeholder, required = false){
    const input = createElement('input', { id, name: id, type, placeholder });
    if(required) input.required = 'true';
    return input;
}

// creates label partner element for an element, used in createForm() with createInput() to make input-label pairs
export function createLabel(forElement, textContent) {
    const label = createElement('label', { for: forElement });
    label.textContent = textContent;
    return label;
}

// creates priority dropdown menu for task form
function createPrioritySelect() {
    const select = createElement('select', { id: 'priority', name: 'priority'});
    const options = ['None', 'Low', 'Medium', 'High'];
    options.forEach(option => {
        const optionElement = createElement('option', { value: option.toLowerCase() });
        optionElement.textContent = option;
        select.appendChild(optionElement);
    });
    return select;
}

// creates a form with task fields to fill out
export function createTaskForm() {
    const form = createElement('form', { id: 'form' });

    const titleLabel = createLabel('title', 'Title: ');
    const titleInput = createInput('title', 'text', 'Enter a title', true); // title is required

    const descLabel = createLabel('desc', 'Description: ');
    const descInput = createInput('desc', 'text', 'Enter a description');

    const dueDateLabel = createLabel('dueDate', 'Due date: ');
    const dueDateInput = createInput('dueDate', 'date', 'Enter a due-date');

    const priorityLabel = createLabel('priority', 'Priority: ');
    const prioritySelect = createPrioritySelect();

    const submitButton = createElement('button', { type: 'submit' });
    submitButton.textContent = 'Submit';

    form.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, prioritySelect, submitButton);

    return form;
}

export function createOverlay() {
    return createElement('div', { id: 'popup-overlay' });
}

// changes form.style from 'none' so it displays itself
export function showForm(form, overlay) {
    form.style.display = 'flex';
    form.style.flexDirection = 'column';
    overlay.style.display = 'block';
    setTimeout(() => {
        form.style.opacity = '1';
    }, 10);
}

export function hideForm(form, overlay) {
    form.style.opacity = '0';
    setTimeout(() => {
        form.style.display = 'none';
        overlay.style.display = 'none';
    }, 300);
}

function getFormValues(form){
    const taskTitle = form.querySelector('#title');
    const taskDesc = form.querySelector('#desc');
    const taskDueDate = form.querySelector('#dueDate');
    const taskPriority = form.querySelector('#priority');

    if (taskTitle === null) {
        alert('Please give your task a title.');
        return false;  
    }

    return { 
        taskTitle: taskTitle.value,
        taskDesc: taskDesc.value,
        taskDueDate: taskDueDate.value,
        taskPriority: taskPriority.value
    };
}

export function createTask(title, desc, dueDate, priority){
    return {
        title: title,
        desc: desc,
        dueDate: dueDate,
        priority: priority,
    }
}

function printTaskList(project){
    console.log(`Tasks for project: ${project.name}`);
    project.tasks.forEach(task => {
        console.log(task);
    })
}


export function addTaskFormHandler() {
    const form = createTaskForm();
    const overlay = createOverlay();
    const content = document.getElementById('content');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const formSubmitBtn = form.querySelector('button');

    // Event listeners for showing and hiding the form
    addTaskBtn.addEventListener('click', () => showForm(form, overlay));
    formSubmitBtn.addEventListener('click', (event) => {
        const { taskTitle, taskDesc, taskDueDate, taskPriority } = getFormValues(form);

        if(taskTitle !== "" || taskTitle.trim()){
            event.preventDefault();
            hideForm(form, overlay);
            addTasktoProject(selectedProject, createTask(taskTitle, taskDesc, taskDueDate, taskPriority));
            printTaskList(getProject(selectedProject));
            renderTasks();
        }
    });

    // appends the overlay with the form to content, by default its invisible
    content.append(form, overlay);
}