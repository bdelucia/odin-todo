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

export function addTasktoProject(projectID, task){
    
}

export function printProjects() {
    return [...projects];
}