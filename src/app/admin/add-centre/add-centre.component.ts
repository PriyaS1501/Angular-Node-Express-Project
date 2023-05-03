import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalService } from 'src/app/shared/services/global.service';
import { FormBuilder, Validators } from '@angular/forms';
import { regExName, regExEmail } from 'src/app/shared/common-data/constants';

@Component({
  selector: 'app-add-centre',
  templateUrl: './add-centre.component.html',
  styleUrls: ['./add-centre.component.css']
})
export class AddCentreComponent implements OnInit {
  id: any
  centres: any
  submitted: boolean = false
  tableName = "centres"
  constructor(private formBuilder: FormBuilder, private service: GlobalService, private router: Router) { }
  addData(data: any) {

    // console.log(data)
    const centreObj = {
      name: data.name,
      description: data.description,
      address: data.address,
      cemail: data.cemail,
      ccontact: data.ccontact,

    }
    this.submitted = true
    this.service.addRecord(this.tableName, centreObj).subscribe(() => {
      alert("Centre added sucessfully")
      this.router.navigate(['/admin/centrelist'])
    }
    )
  }

  ngOnInit(): void {
    this.centres = this.formBuilder.group(
      {
        name: ['', [Validators.required, Validators.pattern(regExName)]],
        description: ['', [Validators.required]],
        address: ['', [Validators.required]],
        cemail: ['', [Validators.required, Validators.pattern(regExEmail)]],
        ccontact: ['', [Validators.required]],

      }
    )
  }


}
