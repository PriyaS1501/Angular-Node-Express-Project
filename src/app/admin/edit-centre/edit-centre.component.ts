import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { FormBuilder } from '@angular/forms';
import { regExName, regExEmail} from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-edit-centre',
  templateUrl: './edit-centre.component.html',
  styleUrls: ['./edit-centre.component.css']
})
export class EditCentreComponent {
  _id: any
  centreObj: any
  editForm: any
  apiuserData:any
  tableName = "Centres"
  submitted: boolean = false
  regularExpName = regExName
  regularExpEmail = regExEmail

  constructor(private activatedRoute: ActivatedRoute, private formBuilder: FormBuilder, private service: GlobalService, private router: Router) { }
  ngOnInit(): void {

    this.activatedRoute.paramMap.subscribe((para) => {
      this._id = para.get('_id')
      console.log(">>" + this._id)
    })


    this.service.getRecord(this.tableName, this._id).subscribe((res) => {
     // this.centreObj = { ...res }

      this.apiuserData = { ...res }
      this.centreObj = this.apiuserData.data
      console.log(res)
    })

  }
  putData(data: any) {
    this.submitted = true
    // console.log(data)
    const temp = {
      _id: this._id,
      name: data.name,
      description: data.description,
      address: data.address,
      cemail: data.cemail,
      ccontact: data.ccontact


    }
    this.service.updateRecord(this.tableName, temp).subscribe(() => {
      alert("Data of Centre id " + this._id + " is updated sucessfully")
      this.router.navigate(['/admin/centrelist'])
    })


  }
}

