import { Routes } from '@angular/router';
import { CalendarComponent } from './calendar/calendar.component';
import { TaskListComponent } from './task-list/task-list.component';

export const routes: Routes = [
  { component: CalendarComponent, path: '' },
  { component: TaskListComponent, path: 'tasks' }
];
