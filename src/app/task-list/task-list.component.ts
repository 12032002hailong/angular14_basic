import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Task } from './Task';
import { NewTask } from './NewTask';

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
  ],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [MatDatepickerModule],
})
export class TaskListComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  newTask: NewTask = new NewTask();

  date: Date = new Date();
  ngOnInit(): void {
    let strDate = new Date(this.route.snapshot.params['date']);
    this.newTask = new NewTask(this.newTask.title, new Date(strDate));
  }

  tasks: Task[] = [
    new Task('visit ann'),
    new Task('call dad'),
    new Task('go to the gym'),
    new Task('wash the dishes'),
    new Task('shop for the party'),
  ];

  add(taskNgForm: NgForm) {
    console.log(taskNgForm);
    if (taskNgForm.touched === false) return;
    if (taskNgForm.valid === false) return;
    if (this.newTask.title) {
      this.tasks.push(new Task(this.newTask.title));
    }
    taskNgForm.reset({ date: this.newTask.date });
  }

  remove(existingTask: Task) {
    this.tasks = this.tasks.filter((item) => {
      return item !== existingTask;
    });
  }

  toggleDone(task: Task) {
    task.isDone = !task.isDone;
  }
}


