import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-course',
  templateUrl: './show-course.component.html',
  styleUrls: ['./show-course.component.css']
})
export class ShowCourseComponent implements OnInit {

  constructor( private service:SharedService) { }

  CourseList:any=[];
  course:any;
  Modaltitle:string | undefined;
  ActivateAddEditCourseComponent:boolean=false;
  ngOnInit(): void {
    this.refreshCourseList();
  }

  addclick(){
    this.course ={
      courseid:0,
      coursename:"",
      coursecategory:"",
      coursefees:"",
      courseduration:""
    }
    this.Modaltitle="Add Course";
    this.ActivateAddEditCourseComponent=true;
  }

  editClick(item:any){
    this.course=item;
    this.Modaltitle="Edit Course";
    this.ActivateAddEditCourseComponent=true;
    
  }
  
  closeClick(){
    this.ActivateAddEditCourseComponent=true;
    this.refreshCourseList();
  }

  deleteClick(item:any){
    if(confirm("Are you sure!!")){
      this.service.deleteCourse(item.courseid).subscribe(res=>{
        alert(res.toString());
        this.refreshCourseList();
      });
    }
  }
  refreshCourseList(){
    this.service.getCourseList().subscribe(data =>{
      this.CourseList=data;
    });
  }

}
