import { renderTasks, renderAllTasks, renderTasksDueToday, renderTasksDueThisWeek, renderImportantTasks} from "./content";
import { projects, setSelectedProject, removeProject } from "./projects.js";
import { toggleAddTaskButton } from "./addTask.js";
import deleteButtonSVG from '../assets/delete-svgrepo-com.svg';
export function renderSidebar() {
    const sidebar = document.getElementById("projectsSidebarContainer");
    sidebar.innerHTML = ""; // Clear the sidebar before re-rendering

    // Render each project with a container for the button and delete button
    projects.forEach((project) => {
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
            sidebar.removeChild(projectContainer); 
            renderSidebar();
        });

        // Append the project button and delete button to the container
        projectContainer.appendChild(button);
        projectContainer.appendChild(deleteBtn);

        // Append the container to the sidebar
        sidebar.appendChild(projectContainer);
    });
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