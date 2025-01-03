const content = document.getElementById('content');
const sidebar = document.getElementById('sidebar');

export function popupForm () {
    const form = document.createElement('form');
    const titleLabel = document.createElement('label');
    const descLabel = document.createElement('label');
    const dueDateLabel = document.createElement('label');
    const priorityLabel = document.createElement('label');
    const titleInput = document.createElement('input');
    const descInput = document.createElement('input');
    const dueDateInput = document.createElement('input');
    const prioritySelect = document.createElement('select');
    const submitButton = document.createElement('button');
    const overlay = document.createElement('div');

    form.id = 'form';

    titleLabel.setAttribute('for', 'title');
    titleLabel.textContent = 'Title: ';
    titleInput.id = 'title';
    titleInput.name = 'title';
    titleInput.type = 'text';
    titleInput.placeholder = 'Enter a title for your to-do list item';

    descLabel.setAttribute('for', 'desc');
    descLabel.textContent = 'Description: ';
    descInput.id = 'desc';
    descInput.name = 'desc';
    descInput.type = 'text';
    descInput.placeholder = 'Enter a description for your to-do list item';

    dueDateLabel.setAttribute('for', 'dueDate');
    dueDateLabel.textContent = 'Due date: ';
    dueDateInput.id = 'dueDate';
    dueDateInput.name = 'dueDate';
    dueDateInput.type = 'date';
    dueDateInput.placeholder = 'Enter a due-date for your to-do list item';

    priorityLabel.setAttribute('for', 'priority');
    priorityLabel.textContent = 'Priority: ';
    prioritySelect.id = 'priority';
    prioritySelect.name = 'priority';
    const options = ['None', 'Low', 'Medium', 'High'];
    options.forEach(option => {
      const optionElement = document.createElement('option');
      optionElement.value = option.toLowerCase();
      optionElement.textContent = option;
      prioritySelect.appendChild(optionElement);
    });

    submitButton.type = 'submit';
    submitButton.textContent = 'Submit';

    form.append(titleLabel, titleInput, descLabel, descInput, dueDateLabel, dueDateInput, priorityLabel, prioritySelect, submitButton);
    
    overlay.id = 'popup-overlay';

    function showForm() {
        form.style.display = 'flex'; 
        form.style.flexDirection = 'column';
        overlay.style.display = 'block'; 
        setTimeout(() => {
            form.style.opacity = '1';
        }, 10);
    }

    function hideForm() {
        form.style.opacity = '0';
        setTimeout(() => {
            form.style.display = 'none';
            overlay.style.display = 'none';
        }, 300);
    }
    submitButton.addEventListener('click', hideForm);

    const addTodoItemBtn = document.createElement('button');
    addTodoItemBtn.textContent = 'Add To-Do Item';
    addTodoItemBtn.className = 'sidebar-item';
    addTodoItemBtn.addEventListener('click', showForm);

    sidebar.append(addTodoItemBtn);

    content.append(form, overlay);
}