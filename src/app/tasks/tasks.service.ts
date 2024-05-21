import { Injectable } from '@angular/core';
import { Task } from './Task';
import { NewTask } from './NewTask';

@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor() { }

  private tasks: Task[] = [
    new Task('visit ann'),
    new Task('call dad'),
    new Task('go to the gym'),
    new Task('wash the dishes'),
    new Task('shop for the party'),
  ];

  getAllTasks(): Task[] {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    this.tasks.push(new Task(newTask.title));

  }

  removeTask(existingTask: Task) {
    const taskRemove = [...this.tasks]
    this.tasks = taskRemove.filter((task) => {
      return task.title !== existingTask.title;
    });
  }

}
