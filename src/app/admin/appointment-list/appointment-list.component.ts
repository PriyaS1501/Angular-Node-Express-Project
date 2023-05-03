import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit  {
  appointmentsData:any 
  tableName="Appointments"
  p: number = 1;
  term:any
  order: string = 'doa';
  reverse: boolean = true;
  apiuserData:any
  changeOrder(val:any){
    this.order=val
    this.reverse =!this.reverse
  }
   constructor(private globalService:GlobalService){  
   }
   // Get Record
   ngOnInit():void{
     this.globalService.getRecords(this.tableName).subscribe((res)=>{
       //console.log(res)
       //this.appointmentsData = res
       this.apiuserData = res
       this.appointmentsData = this.apiuserData.data
     })
   }
  // Delete Record
  delete(_id:any){
   this.globalService.deleteRecord(this.tableName,_id).subscribe(()=>{
     alert('Records of "id ' + _id + '" is deleted successfully')
     this.ngOnInit() // refresh the page after deleting
   })
  }
}
