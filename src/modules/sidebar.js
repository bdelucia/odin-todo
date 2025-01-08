import { renderTasks } from "./content";

export function renderSidebar() {
    const sidebar = document.getElementById("projectsSidebarContainer");
    sidebar.innerHTML = ""; 

    // Render each project as a button
    projects.forEach((project) => {
        const button = document.createElement("button");
        button.textContent = project.name;
        button.addEventListener("click", () => {
            selectedProject = project; 
            renderTasks(); 
        });
        sidebar.appendChild(button);
    });
}