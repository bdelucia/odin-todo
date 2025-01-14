import { renderTasks, renderAllTasks, renderTasksDueToday, renderTasksDueThisWeek, renderImportantTasks} from "./content";
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