import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-add-edit-enrollment',
  templateUrl: './add-edit-enrollment.component.html',
  styleUrls: ['./add-edit-enrollment.component.css']
})
export class AddEditEnrollmentComponent implements OnInit {

  constructor(private service:SharedService) { }
@Input()
enrollment:any;
batchid?:string;
sid?:string;
edate?:Date;
  ngOnInit(): void {
    this.batchid=this.enrollment.batchid;
    this.sid=this.enrollment.sid;
    this.edate=this.enrollment.edate;
  }

  addEnrollment(){
    var data = {
      batchid:this.batchid,
      sid:this.sid,
      edate:this.edate
    };
    this.service.addEnrollment(data).subscribe(res => {
      alert(res.toString());
    });
  }

  updateEnrollment(){
    var data = {
      batchid:this.batchid,
      sid:this.sid,
      edate:this.edate
    };
    this.service.updateEnrollment(data.batchid,data.sid,data).subscribe(res => {
      alert(res.toString());
    });

  }
}
