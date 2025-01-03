const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');
const addTaskBtn = document.getElementById('addTaskBtn');

// creates an element of type, with optional attributes as an object
function createElement(type, attributes = {}) {
    const element = document.createElement(type);
    Object.keys(attributes).forEach(key => {
        element.setAttribute(key, attributes[key]);
    });
    return element;
}

// creates an input
function createInput(id, type, placeholder, required = false){
    const input = createElement('input', { id, name: id, type, placeholder });
    if(required) input.required = 'true';
    return input;
}

// creates label partner element for an element, used in createForm() with createInput() to make input-label pairs
function createLabel(forElement, textContent) {
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
export function createForm() {
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
