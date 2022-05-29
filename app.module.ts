import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFileUploaderModule } from "angular-file-uploader";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutusComponent } from './aboutus/aboutus.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import {WebapiService} from './webapi.service';
import{HttpClientModule} from '@angular/common/http';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { FeedbackComponent } from './feedback/feedback.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseinfoComponent } from './courseinfo/courseinfo.component';
import { MeetingComponent } from './meeting/meeting.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StudentDashboradComponent } from './student-dashborad/student-dashborad.component';
import { InstructorDashboradComponent } from './instructor-dashborad/instructor-dashborad.component';
import { AddQuizComponent } from './instructor-dashborad/add-quiz/add-quiz.component';
import { InstructorCoursesComponent } from './instructor-dashborad/instructor-courses/instructor-courses.component';
import { CourseDetailsComponent } from './instructor-dashborad/course-details/course-details.component';




@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent,
    AboutusComponent,
    DashbordComponent,
    FeedbackComponent,
    CoursesComponent,
    CourseinfoComponent,
    MeetingComponent,
    StudentDashboradComponent,
    InstructorDashboradComponent,
    AddQuizComponent,
    InstructorCoursesComponent,
    CourseDetailsComponent,






  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    AngularFileUploaderModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatGridListModule,
    MatToolbarModule
  ],
  providers: [WebapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
