import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-batch',
  templateUrl: './add-edit-batch.component.html',
  styleUrls: ['./add-edit-batch.component.css']
})
export class AddEditBatchComponent implements OnInit {

  constructor( private service:SharedService) { }

  @Input() batch:any;
    batchid:string | undefined;
    bsdate:Date | undefined;
    bstrength:string | undefined;
    courseid:string | undefined;
  
  ngOnInit(): void {
    this.batchid = this.batch.batchid;
    this.bsdate = this.batch.bsdate;
    this.bstrength = this.batch.bstrength;
    this.courseid = this.batch.courseid;
  }

  addBatch(){
    var data = {
      batchid:this.batchid,
      bsdate:this.bsdate,
      bstrength:this.bstrength,
      courseid:this.courseid
    };
    this.service.addBatch(data).subscribe(res =>{
      alert(res.toString());
    });
  }
  
  updateBatch(){
    var data = {
      batchid:this.batchid,
      bsdate:this.bsdate,
      bstrength:this.bstrength,
      courseid:this.courseid
    };
    this.service.updateBatch(data.batchid,data).subscribe(res => {
      alert(res.toString());
    });

  }
}
