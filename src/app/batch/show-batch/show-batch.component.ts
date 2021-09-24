import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-batch',
  templateUrl: './show-batch.component.html',
  styleUrls: ['./show-batch.component.css']
})
export class ShowBatchComponent implements OnInit {

  constructor( private service: SharedService) {}

  BatchList: any = [];
  batch:any;
  ModalTitle:string | undefined;
  ActivateAddEditBatchComponent:boolean=false;

  ngOnInit(): void {
    this.refreshBatch();
  }

  addclick(){

    this.batch  = {
      batchid:0,
      bsdate:"",
      bstrength:"",
      courseid:""
    }
    this.ModalTitle="Add Batch";
    this.ActivateAddEditBatchComponent=true;

  }
  editClick(item: any){
    this.batch=item;
    this.ModalTitle="Edit Batch";
    this.ActivateAddEditBatchComponent=true;
  }
  closeClick(){
    this.ActivateAddEditBatchComponent=false;
    this.refreshBatch();
  }

  deleteClick(item:any){
      if (confirm("Are you sure?")){
        this.service.deleteBatch(item.batchid).subscribe(data=>{
          alert(data.toString());
          this.refreshBatch();
        })
      }
  }

  refreshBatch() {
    this.service.getBatchList().subscribe(data => {
      this.BatchList = data;
    });
  }

}
