import { renderTasks, renderAllTasks, renderTasksDueToday, renderTasksDueThisWeek, renderImportantTasks} from "./content";
import { projects, setSelectedProject, removeProject } from "./projects.js";
import { createElement, createOverlay, showForm, toggleAddTaskButton } from "./addTask.js";
import deleteButtonSVG from '../assets/delete-svgrepo-com.svg';
import clearStorageSVG from '../assets/nuclear-bomb-svgrepo-com.svg';
import darkLightThemeSVG from '../assets/theme-light-dark(1).svg';
import { createConfirmationForm } from "./localStorage.js";
export function renderSidebar() {
    const projectsSidebarContainer = document.getElementById("projectsSidebarContainer");
    projectsSidebarContainer.innerHTML = ""; // Clear the sidebar before re-rendering

    // Render each project with a container for the button and delete button
    projects.forEach((project) => {
        const sidebar = document.getElementById('sidebar');
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container'); 

        // Create the project button
        const button = document.createElement("button");
        button.textContent = project.name;
        button.addEventListener("click", () => {
            setSelectedProject(project.name);
            toggleAddTaskButton();
            renderTasks(); 
        });

        const deleteBtn = document.createElement("img");
        deleteBtn.src = deleteButtonSVG;
        deleteBtn.classList.add("delete-project-button");
        deleteBtn.style.display = "none"; // Initially hidden

        projectContainer.addEventListener("mouseenter", () => {
            deleteBtn.style.display = "block"; // Show delete button
        });
        projectContainer.addEventListener("mouseleave", () => {
            deleteBtn.style.display = "none"; // Hide delete button when not hovering
        });

        deleteBtn.addEventListener('click', () => {
            removeProject(project.name); 
            projectsSidebarContainer.removeChild(projectContainer); 
            renderSidebar();
            setSelectedProject(projects[0].name);
            renderTasks();
        });

        // Append the project button and delete button to the container
        projectContainer.appendChild(button);
        projectContainer.appendChild(deleteBtn);

        // Append the container to the sidebar
        projectsSidebarContainer.appendChild(projectContainer);
    });
}

export function renderWebsiteButtons(){
    const websiteButtonsContainer = createElement('div', { class: 'website-buttons-container'});
    const changeThemeBtn = createElement('img', {src: darkLightThemeSVG, class: 'dark-light-theme-button'});
    const clearStorageBtn = createElement('img', {src: clearStorageSVG, class: 'clear-storage-button'});

    websiteButtonsContainer.appendChild(changeThemeBtn);
    websiteButtonsContainer.appendChild(clearStorageBtn);

    document.body.classList.add('dark-theme');

    changeThemeBtn.addEventListener('click', () => {
        // Check if the body has 'dark-theme' class
        if (document.body.classList.contains('dark-theme')) {
            // If dark theme is applied, remove it and add light theme
            document.body.classList.remove('dark-theme');
            document.body.classList.add('light-theme');
        } else {
            // Otherwise, apply dark theme
            document.body.classList.remove('light-theme');
            document.body.classList.add('dark-theme');
        }
    });

    clearStorageBtn.addEventListener('click', () => {
        const confirmForm = createConfirmationForm();
        const overlay = createOverlay();
        showForm(confirmForm, overlay);
    })

    sidebar.appendChild(websiteButtonsContainer);
}

export function sidebarButtonsHandler(){
    const allTasksBtn = document.getElementById('allTasksBtn');
    const tasksTodayBtn = document.getElementById('todayBtn');
    const tasksWeekBtn = document.getElementById('thisWeekBtn');
    const importantTasksBtn = document.getElementById('importantBtn');

    allTasksBtn.addEventListener("click", () => {
        setSelectedProject(null);
        renderAllTasks();
    });
    tasksTodayBtn.addEventListener('click', () => {
        setSelectedProject(null);
        renderTasksDueToday();
    });
    tasksWeekBtn.addEventListener('click', () => {
        setSelectedProject(null);
        renderTasksDueThisWeek();
    });
    importantTasksBtn.addEventListener('click', () => {
        setSelectedProject(null);
        renderImportantTasks();
    });
}