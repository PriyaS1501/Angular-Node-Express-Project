import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent  implements OnInit{
  usersData:any 
  tableName="Users"
  apiuserData:any
  
  constructor(private globalService:GlobalService){  
  }
  // Get Record
  ngOnInit():void{
    this.globalService.getRecords(this.tableName).subscribe((res)=>{
      //console.log(res)
      //this.usersData = res
      this.apiuserData = res
      this.usersData = this.apiuserData.data
    })
  }
}
