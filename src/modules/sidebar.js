import { renderTasks, renderAllTasks, renderTasksDueToday, renderTasksDueThisWeek, renderImportantTasks} from "./content";
import { projects, selectedProject, setSelectedProject, removeProject } from "./projects.js";
import { toggleAddTaskButton } from "./addTask.js";
import deleteButtonSVG from '../assets/delete-svgrepo-com.svg';
export function renderSidebar() {
    const sidebar = document.getElementById("projectsSidebarContainer");
    sidebar.innerHTML = ""; // Clear the sidebar before re-rendering

    // Render each project with a container for the button and delete button
    projects.forEach((project) => {
        // Create the container for the project (includes the project button and delete button)
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container'); // Add a class for styling

        // Create the project button
        const button = document.createElement("button");
        button.textContent = project.name;
        button.addEventListener("click", () => {
            setSelectedProject(project.name);
            toggleAddTaskButton();
            renderTasks(); 
        });

        // Create the delete button (image of SVG)
        const deleteBtn = document.createElement("img");
        deleteBtn.src = deleteButtonSVG; // Add the correct path to your delete button SVG
        deleteBtn.classList.add("delete-project-button");
        deleteBtn.style.display = "none"; // Initially hidden

        // Add hover effect to show the delete button when hovering over the container
        projectContainer.addEventListener("mouseenter", () => {
            deleteBtn.style.display = "block"; // Show delete button
        });
        projectContainer.addEventListener("mouseleave", () => {
            deleteBtn.style.display = "none"; // Hide delete button when not hovering
        });

        // Delete button functionality (you can implement your own function here)
        deleteBtn.addEventListener('click', () => {
            removeProject(project.name); // Function to remove project
            sidebar.removeChild(projectContainer); // Remove the project container from the sidebar
            renderSidebar();
            if(selectedProject){
                renderTasks()
            } else {
                renderAllTasks();
            }
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