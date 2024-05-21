import { CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from './Task';
import { NewTask } from './NewTask';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [
    NgFor,
    RouterModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [MatDatepickerModule],
})
export class TaskListComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) { }

  tasks = this.taskService.getAllTasks();
  newTask: NewTask = new NewTask();
  date: Date = new Date();
  ngOnInit(): void {
    let strDate = new Date(this.route.snapshot.params['date']);
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  add(taskNgForm: NgForm) {
    if (taskNgForm.touched === false) return;
    if (taskNgForm.valid === false) return;
    if (this.newTask.title) {
      this.taskService.addTask(this.newTask);
      this.tasks = this.taskService.getAllTasks();
    }
    taskNgForm.reset({ date: this.newTask.date });
  }

  remove(existingTask: Task) {
    let userConfirm = confirm(`Are you sure remove ${existingTask.title}`)
    if (userConfirm) {
      this.taskService.removeTask(existingTask);
      this.tasks = this.taskService.getAllTasks();
    }

  }

  toggleDone(task: Task) {
    task.isDone = !task.isDone;
  }
}


