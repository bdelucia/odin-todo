import {
  isWithinInterval,
  isToday,
  startOfWeek,
  endOfWeek,
  parseISO,
} from "date-fns";
import { projects } from "./projects";
export function getTasksDueToday() {
  let tasksDueToday = [];

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      const dueDate = parseISO(task.dueDate);
      if (isToday(dueDate)) {
        tasksDueToday.push(task);
      }
    });
  });

  return tasksDueToday;
}

export function getTasksDueThisWeek() {
  let tasksDueThisWeek = [];

  // Get the start and end of the current week
  const startOfThisWeek = startOfWeek(new Date(), { weekStartsOn: 0 }); // 0 = Sunday, 1 = Monday, etc.
  const endOfThisWeek = endOfWeek(new Date(), { weekStartsOn: 0 });

  projects.forEach((project) => {
    project.tasks.forEach((task) => {
      const dueDate = parseISO(task.dueDate);

      if (
        isWithinInterval(dueDate, {
          start: startOfThisWeek,
          end: endOfThisWeek,
        })
      ) {
        tasksDueThisWeek.push(task);
      }
    });
  });

  return tasksDueThisWeek;
}
