import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {StudentComponent} from './student/student.component';
import {CourseComponent} from './course/course.component';
import {BatchComponent} from './batch/batch.component';
import {EnrollmentComponent} from './enrollment/enrollment.component';

const routes: Routes = [
  {
    path:'student',
    component:StudentComponent
  },
  {
    path:'course',
    component:CourseComponent
  },
  {
    path:'batch',
    component:BatchComponent
  },
  {
    path:'enrollment',
    component:EnrollmentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
