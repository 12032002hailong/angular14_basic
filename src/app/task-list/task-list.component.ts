import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ActivatedRoute, Route } from '@angular/router';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [NgFor, RouterModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
  providers: [
    MatDatepickerModule,
  ],
})
export class TaskListComponent implements OnInit {

  constructor(private route: ActivatedRoute) {

  }

  date: Date = new Date();
  ngOnInit(): void {
    this.date = new Date(this.route.snapshot.params['date']);
  }

  tasks: Task[] = [
    new Task('visit ann'),
    new Task('call dad'),
    new Task('go to the gym'),
    new Task('wash the dishes'),
    new Task('shop for the party'),
  ]


  add(newTask: string) {
    // if (newTask) {
    //   this.tasks = [...this.tasks, newTask]
    // }
    if (newTask) {

      this.tasks.push(new Task(newTask));
    }
  }

  remove(existingTask: Task) {
    this.tasks = this.tasks.filter(item => {
      return item !== existingTask
    })
  }

  toggleDone(task: Task) {
    task.isDone = !task.isDone;

  }
}

class Task {
  constructor(public title: string) {

  }
  public isDone = false;
}
