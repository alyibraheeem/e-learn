import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { subscribeOn } from 'rxjs';
@Component({
  selector: 'app-instructor-dashborad',
  templateUrl: './instructor-dashborad.component.html',
  styleUrls: ['./instructor-dashborad.component.css']
})
export class InstructorDashboradComponent implements OnInit {


  constructor( private http:HttpClient) { this.geAllCourses()}
course:any=[];

  geAllCourses(){
return this.http.get('https://localhost:7263/api/Courses1/GetCourses')
.subscribe((result) => {
this.course=result;
console.log(result);

});
  }





  a="./assets/dashboard.png";
  b="./assets/help-web-button.png";
  feed="./assets/feed.png";
  help="./assets/help.png";
  c="./assets/income.png";
  d="./assets/info.png";
  e="./assets/notifications.png";
  f="./assets/payment.png";
  s="./assets/reading-book (1).png";
  h="./assets/school.png";
  ss="./assets/schools.png";
  visa="./assets/visa.png"
  ee="./assets/ee.png"
  elearn="./assets/e-learning.jpg";
  profile="./assets/profile.png";
  quiz="./assets/quiz.png";
  grade="./assets/grade.png";
  o="./assets/settings.png";
  u="./assets/students.png";
  m="./assets/teachers.png";

  nnn="./assets/thumnails2.png";
  mm="./assets/user.png";
  cc="./assets/Course.png";
  ins="./assets/ins.png";
  dash="./assets/dash.png";
  ngOnInit(): void {
  }

}