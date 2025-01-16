import { projects } from "./projects";

export function getImportantTasks() {
  let importantTasks = [];

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      if (task.priority === "high") {
        importantTasks.push(task);
      }
    });
  });
  return importantTasks;
}
