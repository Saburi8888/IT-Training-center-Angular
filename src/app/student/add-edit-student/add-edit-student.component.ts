import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-student',
  templateUrl: './add-edit-student.component.html',
  styleUrls: ['./add-edit-student.component.css']
})
export class AddEditStudentComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() stud:any;
  sid?:string;
  sname?:string;
  sdob?:string;
  scity?:string;
  squal?:string;
  semail?:string;
  sphone?:string;

  ngOnInit(): void {
    this.sid = this.stud.sid;
    this.sname = this.stud.sname;
    this.sdob = this.stud.sdob;
    this.scity= this.stud.scity;
    this.squal = this.stud.squal;
    this.semail = this.stud.semail;
    this.sphone = this.stud.sphone;

  }

  addStudent(){
    var data = {
                sid:this.sid,
                sname:this.sname,
                sdob:this.sdob,
                scity:this.scity,
                squal:this.squal,
                semail:this.semail,
                sphone:this.sphone
                };
    this.service.addStudent(data).subscribe(res => {
      alert(res.toString());
    });
  }

  updateStudent(){
    var data = {
      sid:this.sid,
      sname:this.sname,
      sdob:this.sdob,
      scity:this.scity,
      squal:this.squal,
      semail:this.semail,
      sphone:this.sphone
      };
this.service.updateStudent(data.sid,data).subscribe(res => {
alert(res.toString());
});

  }

}
