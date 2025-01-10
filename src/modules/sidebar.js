import { renderTasks, renderAllTasks} from "./content";
import { projects, selectedProject, setSelectedProject } from "./projects.js";

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
            renderTasks(); 
        });
        sidebar.appendChild(button);
    });
}

export function sidebarButtonsHandler(){
    const allTasksBtn = document.getElementById('allTasksBtn');
    allTasksBtn.addEventListener("click", () => {
        renderAllTasks();
    })
}