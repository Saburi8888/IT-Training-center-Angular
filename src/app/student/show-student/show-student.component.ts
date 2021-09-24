import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-student',
  templateUrl: './show-student.component.html',
  styleUrls: ['./show-student.component.css']
})
export class ShowStudentComponent implements OnInit {

  constructor( private service:SharedService) { }

  StudentList:any=[];
  ModalTitle:string | undefined;
  ActivateAddEditStudentComponent:boolean=false;
  stud:any;
  ngOnInit(): void {
    this.refreshStudentList();
  }

  addClick(){
    this.stud={
      sid:0,
      sname:"",
      sdob:"",
      scity:"",
      squal:"",
      semail:"",
      sphone:""
    }
    this.ModalTitle="Add Student";
    this.ActivateAddEditStudentComponent=true;
  }

  editClick(item: any){
    this.stud=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditStudentComponent=true;
  }
  closeClick(){
    this.ActivateAddEditStudentComponent=false;
    this.refreshStudentList();
  }

  deleteClick(item:any){
      if (confirm("Are you sure?")){
        this.service.deleteStudent(item.sid).subscribe(data=>{
          alert(data.toString());
          this.refreshStudentList();
        })
      }
  }

  refreshStudentList(){
    this.service.getStudentList().subscribe(data=>{
      this.StudentList=data;
    });
    
  }


}
