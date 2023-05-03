import { Component, OnInit } from '@angular/core';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctorsData: any  
  tableName="Doctors"
  apiuserData :any
  
  constructor(private globalService: GlobalService) {
  }
  //Get Record
  ngOnInit(): void {
    this.globalService.getRecords(this.tableName).subscribe((res) => {
      //console.log(res)
     // this.doctorsData = res
      this.apiuserData = res
      this.doctorsData = this.apiuserData.data
      
    })
    
  }
  
 
}
