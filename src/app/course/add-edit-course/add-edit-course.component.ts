import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-course',
  templateUrl: './add-edit-course.component.html',
  styleUrls: ['./add-edit-course.component.css']
})
export class AddEditCourseComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input()
  course: any; 
  courseid?:string;
  coursename?:string;
  coursecategory?:string;
  coursefees?:number;
  courseduration?:number;

  ngOnInit(): void {
    this.courseid = this.course.courseid;
    this.coursename = this.course.coursename;
    this.coursecategory = this.course.coursecategory;
    this.coursefees = this.course.coursefees;
    this.courseduration = this.course.courseduration; 
  }

  addCourse(){
    var data = {
      courseid:this.courseid,
      coursename:this.coursename,
      coursecategory:this.coursecategory,
      coursefees:this.coursefees,
      courseduration:this.courseduration
    };
    this.service.addCourse(data).subscribe(res =>{
      alert(res.toString());
      
    });
  }

  updateCourse(){
    var data = {
      courseid:this.courseid,
      coursename:this.coursename,
      coursecategory:this.coursecategory,
      coursefees:this.coursefees,
      courseduration:this.courseduration
    };
    this.service.updateCourse(data.courseid,data).subscribe(res =>{
      alert(res.toString());
      
    });
  }


}
