import { renderTasks, renderAllTasks} from "./content";
import { projects, selectedProject, setSelectedProject } from "./projects.js";
import { toggleAddTaskButton } from "./addTask.js";
export function renderSidebar() {
    const sidebar = document.getElementById("projectsSidebarContainer");
    sidebar.innerHTML = ""; 

    // Render each project as a button
    projects.forEach((project) => {
        const button = document.createElement("button");
        console.log(project);
        button.textContent = project.name;
        button.addEventListener("click", () => {
            setSelectedProject(project.name);
            toggleAddTaskButton();
            renderTasks(); 
        });
        sidebar.appendChild(button);
    });
}

export function sidebarButtonsHandler(){
    const allTasksBtn = document.getElementById('allTasksBtn');
    allTasksBtn.addEventListener("click", () => {
        setSelectedProject(null);
        toggleAddTaskButton();
        renderAllTasks();
    })
}