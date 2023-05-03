import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { regExName, regExPwd } from 'src/app/shared/common-data/constants';
import { GlobalService } from 'src/app/shared/services/global.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  uname = regExName
  upwd = regExPwd
  uName: any
  uPass: any
  userdata: any
  apiuserData: any
  tableName = "Users"
  constructor(private service: GlobalService, private router: Router) { }
  getData() {

    this.service.getRecords(this.tableName).subscribe((res) => {
      //console.log(res) // ......prints Details of users in table "Users"
      this.apiuserData = res
      this.userdata = this.apiuserData.data
      // console.log(this.userdata) // ......prints Details of users in table "Users"
      //console.log(this.username + " " + this.password) // Its prints input value in form (undefined undefined)
      const data = this.userdata.filter((item: any) => {
        // console.log(item.username + " " + item.password)// ......prints Details of users in table "Users"
        return ((item.username == this.uName) && (item.password == this.uPass))
      })
      //console.log(data)

      if (data.length > 0) {

        this.service.signIn(this.uName)
        window.alert("You Are Sucessfully LoggedIn into admin account!!")
        this.router.navigate(['/admin/dashboard'])

      }
      else {
        //console.log("Invalid User")
        alert("Invalid Credentials. Try again!!")
        this.uName = ""
        this.uPass = ""
      }
    })
  }

}
