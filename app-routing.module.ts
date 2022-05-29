import { CourseDetailsComponent } from './instructor-dashborad/course-details/course-details.component';
import { AddQuizComponent } from './instructor-dashborad/add-quiz/add-quiz.component';
import { InstructorDashboradComponent } from './instructor-dashborad/instructor-dashborad.component';
import { InstructorCoursesComponent } from './instructor-dashborad/instructor-courses/instructor-courses.component';

import { DashbordComponent } from './dashbord/dashbord.component';
import { CoursesComponent } from './courses/courses.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './aboutus/aboutus.component';
import {FeedbackComponent}from './feedback/feedback.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { MeetingComponent } from './meeting/meeting.component';

const routes: Routes = [
{path:'',component:HomeComponent},
{path:'SignUp',component:SignupComponent},
{path:'SignIN',component:SigninComponent},

{path:'Aboutus',component:AboutusComponent},
{path:'SignIn',component:SigninComponent},
{path:'Dashbord',component:DashbordComponent},
{path:'Meeting',component:MeetingComponent},
{path:'Dashbord/Courses',component:CoursesComponent},
{path:'Dashbord/Courses/Courseinfo',component:CourseinfoComponent},
{path:'Feedback',component:FeedbackComponent},
{path:'InstructorDashborad',component:InstructorDashboradComponent},
{path:'InstructorDashborad/Add-Quiz' ,component:AddQuizComponent},
{path:'InstructorDashborad/Instructor-Courses' ,component:InstructorCoursesComponent},
{path:'InstructorDashborad/Instructor-Courses/Courses-details' ,component:CourseDetailsComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
