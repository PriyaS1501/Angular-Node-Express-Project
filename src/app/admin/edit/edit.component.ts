import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { FormBuilder } from '@angular/forms';
import { regExFullName, regExEmail, regExContact, regExExperience } from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  _id: any
  docObj: any
  editForm: any
  apiuserData:any
  tableName = "Doctors"
  submitted: boolean = false
  centresData:any 
  tableName1="Centres"
  regularExpFullName = regExFullName
  regularExpExperience = regExExperience
  regularExpEmail = regExEmail
  regularExpContact = regExContact
  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private service: GlobalService, private router: Router) { }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((para) => {
      this._id = para.get('_id')
      console.log(">>" + this._id)
    })


    this.service.getRecord(this.tableName, this._id).subscribe((res) => {
      //this.docObj = { ...res }

      this.apiuserData = { ...res }
      this.docObj = this.apiuserData.data
      //console.log(res)
    })
    this.service.getRecords(this.tableName1).subscribe((res)=>{
      //console.log(res)
      //this.centresData = res
      this.apiuserData = res
      this.centresData = this.apiuserData.data
    })

  }
  putData(data: any) {
    this.submitted = true
    // console.log(data)
    const temp = {
      _id: this._id,
      name: data.name,
      qualification: data.qualification,
      speciality: data.speciality,
      experience: data.experience,
      about: data.about,
      email: data.email,
      contact: data.contact,
      centre: data.centre,
      OPDtimeAM: data.OPDtimeAM,
      OPDtimePM: data.OPDtimePM,
      OPDdays: data.OPDdays,
      gender: data.gender
    }
    this.service.updateRecord(this.tableName, temp).subscribe(() => {
      alert("Data of employee id " + this._id + " is updated sucessfully")
      this.router.navigate(['/admin/doctorlist'])
    })

   
  }
}
