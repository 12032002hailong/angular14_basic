import { Injectable } from '@angular/core';
import { Task } from './Task';
import { NewTask } from './NewTask';
import { Observable, BehaviorSubject } from 'rxjs';




@Injectable({
  providedIn: 'root',
})
export class TaskService {

  constructor() { }

  private tasks = new BehaviorSubject([
    new Task('visit ann'),
    new Task('call dad'),
    new Task('go to the gym'),
    new Task('wash the dishes'),
    new Task('shop for the party'),
  ]);

  getAllTasks(): Observable<Task[]> {
    return this.tasks;
  }

  addTask(newTask: NewTask) {
    let updatedTasks = this.tasks.value.concat(new Task(newTask.title));
    this.tasks.next(updatedTasks);
    // this.tasks.push(new Task(newTask.title));

  }

  removeTask(existingTask: Task) {
    let updatedTasks = this.tasks.value.filter(task => task !== existingTask)
    this.tasks.next(updatedTasks)
  }

}
