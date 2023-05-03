import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  usersData:any 
  tableName="Users"
  apiuserData:any

  flag: boolean = true 
  ngOnInit(): void {
    this.router.events.subscribe((val: any) => {
      if (val.url) {
        if (sessionStorage.getItem('user_key') && val.url.includes('admin')) {
          this.flag = false
        } else {
          this.flag = true
        }
      }
    })

    this.service.getRecords(this.tableName).subscribe((res)=>{
      //console.log(res)
      //this.usersData = res
      this.apiuserData = res
      this.usersData = this.apiuserData.data
    })
  }

  constructor(private service: GlobalService, private router: Router) { }
  logIn() {
    if (sessionStorage.getItem("user_key")) {
      this.router.navigate(['/admin/dashboard'])
    } else {
      this.router.navigate(['/login'])
    }
  }


  signOut() {
    if (confirm('Are you sure, you want to sign out')) {
      this.service.signOut()
      this.router.navigate(['/'])
    }
  }

}
