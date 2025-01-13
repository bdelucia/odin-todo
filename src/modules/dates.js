import { isToday, parseISO } from 'date-fns';
import { projects } from './projects';
export function getTasksDueToday() {
    let tasksDueToday = [];

    projects.forEach(project => {
        project.tasks.forEach(task => {
            
            const dueDate = parseISO(task.dueDate);
            if (isToday(dueDate)) {
                tasksDueToday.push(task);
            }
        });
    });

    return tasksDueToday;
}