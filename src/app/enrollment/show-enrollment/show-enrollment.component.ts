import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
@Component({
  selector: 'app-show-enrollment',
  templateUrl: './show-enrollment.component.html',
  styleUrls: ['./show-enrollment.component.css']
})
export class ShowEnrollmentComponent implements OnInit {

  EnrollmentList:any=[];
  enrollment:any;
  ModalTitle?:string;
  ActivateAddEditEnrollmentComponent:boolean=false;

  constructor(private service:SharedService) { }

  ngOnInit(): void {
    this.refreshEnrollment();
  }

  addClick(){
    this.enrollment={
      batchid:0,
      sid:0,
      edate:""
    }
    this.ModalTitle="Add Enrollment";
    this.ActivateAddEditEnrollmentComponent=true;
    
  }
  editClick(dataItem:any){
    this.enrollment=dataItem;
    this.ModalTitle="Edit Enrollment";
    this.ActivateAddEditEnrollmentComponent=true;
  }
  deleteClick(dataItem:any){
    if(confirm("Are you sure!!")){
      this.service.deleteEnrollment(dataItem.batchid,dataItem.sid).subscribe(res=>{
        alert(res.toString());
        this.refreshEnrollment();
      });
    }
  }

  closeClick(){
    
    this.ActivateAddEditEnrollmentComponent=false;
    this.refreshEnrollment();
  };

  refreshEnrollment() {
    this.service.getEnrollmentList().subscribe(data => {
      this.EnrollmentList=data;
    });
  }

}
