import { Component } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent {
  centresData:any 
  tableName="Centres"
  apiuserData:any
   
   constructor(private globalService:GlobalService){  
   }
   // Get Record
   ngOnInit():void{
     this.globalService.getRecords(this.tableName).subscribe((res)=>{
       //console.log(res)
       //this.centresData = res
       this.apiuserData = res
       this.centresData = this.apiuserData.data
     })
   }
}
