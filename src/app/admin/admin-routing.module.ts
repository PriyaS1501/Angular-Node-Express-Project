import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCentreComponent } from './add-centre/add-centre.component';
import { AddComponent } from './add/add.component';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { CentreListComponent } from './centre-list/centre-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DoctorListComponent } from './doctor-list/doctor-list.component';
import { EditCentreComponent } from './edit-centre/edit-centre.component';
import { EditComponent } from './edit/edit.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'doctorlist', component: DoctorListComponent },
  { path: 'add', component: AddComponent },
  { path: 'edit', component: EditComponent },
  { path: 'edit/:_id', component: EditComponent },
  { path: 'centrelist', component: CentreListComponent },
  { path: 'addcentre', component: AddCentreComponent },
  { path: 'editcentre/:_id', component: EditCentreComponent },
  { path: 'appointmentlist', component: AppointmentListComponent }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
