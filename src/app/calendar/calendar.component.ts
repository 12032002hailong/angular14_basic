import { Component, OnInit } from '@angular/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-calendar',
  standalone: true,
  imports: [MatDatepickerModule, MatNativeDateModule, MatCardModule, RouterModule],
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.css',
  providers: [provideNativeDateAdapter()],

})
export class CalendarComponent implements OnInit {

  selectedDate = new Date();

  ngOnInit(): void {

  }
}
