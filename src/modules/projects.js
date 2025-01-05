let projects = [];

function Project(id, name) {
    return {
        id, 
        name,
        tasks: [],
    }
}

export function addProject(name){
    const newProject = Project(projects.length+1, name);
    projects.push(newProject);
}

export function addTasktoProject(projectName, task){
    const project = projects.find(p => p.id === projectName);
    if(project) {
        project.tasks.push(task);
    } else {
        alert(`Project not found, couldn't add task.`);
    }
}

export function printProjects() {
    return [...projects];
}