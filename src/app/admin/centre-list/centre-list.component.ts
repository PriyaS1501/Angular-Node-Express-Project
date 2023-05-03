import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
@Component({
  selector: 'app-centre-list',
  templateUrl: './centre-list.component.html',
  styleUrls: ['./centre-list.component.css']
})
export class CentreListComponent implements OnInit  {
  centresData:any 
  tableName="centres"
  p: number = 1;
  term:any
  order: string = 'name';
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
      // this.centresData = res
       this.apiuserData = res
       this.centresData = this.apiuserData.data
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