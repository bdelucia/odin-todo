const content = document.getElementById('content');

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
    form.id = 'form';
    form.action = '/submit';
    form.method = 'POST';

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

    form.append(titleLabel, titleInput);
    form.append(descLabel, descInput);
    form.append(dueDateLabel, dueDateInput);
    form.append(priorityLabel, prioritySelect);
    form.appendChild(submitButton);

    content.appendChild(form);
}