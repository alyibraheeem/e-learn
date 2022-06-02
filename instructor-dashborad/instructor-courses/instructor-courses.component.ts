import { Component, OnInit } from '@angular/core';
import { Guid } from "guid-typescript";
import { Todo } from 'src/models/todo.model';

@Component({
  selector: 'app-instructor-courses',
  templateUrl: './instructor-courses.component.html',
  styleUrls: ['./instructor-courses.component.css']
})
export class InstructorCoursesComponent  {

  constructor() { }
  todos :Todo[]=[
    new Todo(Guid.create(),'Dr/Mahmoud Mounir','opp',2),
    new Todo(Guid.create(),'Dr/Ahmed ',' system',4),
    new Todo(Guid.create(),'Dr/JA','algo ',3),
      ]


}