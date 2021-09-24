import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { ShowStudentComponent } from './student/show-student/show-student.component';
import { AddEditStudentComponent } from './student/add-edit-student/add-edit-student.component';
import { CourseComponent } from './course/course.component';
import { ShowCourseComponent } from './course/show-course/show-course.component';
import { AddEditCourseComponent } from './course/add-edit-course/add-edit-course.component';
import { BatchComponent } from './batch/batch.component';
import { ShowBatchComponent } from './batch/show-batch/show-batch.component';
import { AddEditBatchComponent } from './batch/add-edit-batch/add-edit-batch.component';
import { EnrollmentComponent } from './enrollment/enrollment.component';
import { ShowEnrollmentComponent } from './enrollment/show-enrollment/show-enrollment.component';
import { AddEditEnrollmentComponent } from './enrollment/add-edit-enrollment/add-edit-enrollment.component';
import {SharedService} from './shared.service';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    ShowStudentComponent,
    AddEditStudentComponent,
    CourseComponent,
    ShowCourseComponent,
    AddEditCourseComponent,
    BatchComponent,
    ShowBatchComponent,
    AddEditBatchComponent,
    EnrollmentComponent,
    ShowEnrollmentComponent,
    AddEditEnrollmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
