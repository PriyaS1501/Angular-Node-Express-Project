import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { FormBuilder, Validators} from '@angular/forms';
import { regExFullName, regExEmail, regExContact, regExExperience } from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  id:any
  doctors: any
  submitted: boolean = false
  tableName="Doctors"
  centresData:any 
  tableName1="Centres"
  apiuserData:any
  constructor(private formBuilder: FormBuilder, private service: GlobalService, private router: Router) { }
  addData(data: any) {
   
   // console.log(data)
    const docObj = {
      name: data.name,
      qualification: data.qualification,
      speciality: data.speciality,
      experience :data.experience,
      about :data.about,
      email :data.email,
      contact:data.contact,
      centre:data.centre,
      OPDtimeAM:data.OPDtimeAM,
      OPDtimePM:data.OPDtimePM,
      OPDdays:data.OPDdays,
      gender:data.gender
    } 
    this.submitted = true
this.service.addRecord(this.tableName,docObj). subscribe(()=>{
  alert("Doctors Record added sucessfully")
  this.router.navigate(['/admin/doctorlist'])
}
)
  }
 
  ngOnInit(): void {
    this.doctors = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern(regExFullName)]],
        qualification: ['', [Validators.required]],
        speciality: ['', [Validators.required]],
        experience: ['', [Validators.required, Validators.pattern(regExExperience)]],
        about: ['', [Validators.required]],
        email: ['', [Validators.required, Validators.pattern(regExEmail)]],
        contact: ['', [Validators.required, Validators.pattern(regExContact)]],
        centre: ['', [Validators.required]],
        OPDtimeAM: ['', [Validators.required]],
        OPDtimePM: ['', [Validators.required]],
        OPDdays: ['', [Validators.required]],
        gender: ['', [Validators.required]]

      }
    )
    this.service.getRecords(this.tableName1).subscribe((res)=>{
      //console.log(res)
      //this.centresData = res
       this.apiuserData = res
      this.centresData = this.apiuserData.data
      
    })
  }


}
