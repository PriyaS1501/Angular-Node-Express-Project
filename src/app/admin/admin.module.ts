import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { CentreListComponent } from './centre-list/centre-list.component';
import { AddCentreComponent } from './add-centre/add-centre.component';
import { EditCentreComponent } from './edit-centre/edit-centre.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { OrderModule } from 'ngx-order-pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { GenderPipe } from '../shared/custom-pipe/gender.pipe';


@NgModule({
  declarations: [
    DashboardComponent,
    AddComponent,
    EditComponent,
    DoctorListComponent,
    CentreListComponent,
    AddCentreComponent,
    EditCentreComponent,
    AppointmentListComponent,
    GenderPipe
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OrderModule,
    Ng2SearchPipeModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
