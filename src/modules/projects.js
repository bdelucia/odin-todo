let projects = [];

export function Project(name) {
    return { name }
}

export function addProject(name){
    const newProject = Project(name);
    projects.push(newProject);
}

export function printProjects() {
    return [...projects];
}