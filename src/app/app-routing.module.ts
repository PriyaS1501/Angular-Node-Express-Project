import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCentreComponent } from './admin/add-centre/add-centre.component';
import { AddComponent } from './admin/add/add.component';
import { AppointmentListComponent } from './admin/appointment-list/appointment-list.component';
import { CentreListComponent } from './admin/centre-list/centre-list.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { DoctorListComponent } from './admin/doctor-list/doctor-list.component';
import { EditCentreComponent } from './admin/edit-centre/edit-centre.component';
import { EditComponent } from './admin/edit/edit.component';
import { AboutComponent } from './components/about/about.component';
import { BookAnAppointmentComponent } from './components/book-an-appointment/book-an-appointment.component';
import { CentresComponent } from './components/centres/centres.component';
import { DoctorsComponent } from './components/doctors/doctors.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"home", component: HomeComponent},
  {path:"about", component:AboutComponent},
  {path:"doctors", component:DoctorsComponent},
  {path:"centres", component:CentresComponent},
  {path:"book-an-appointment", component:BookAnAppointmentComponent},
  {path:"login", component:LoginComponent},
  {path:"dashboard", component:DashboardComponent},
  {path:"doctorlist", component:DoctorListComponent},
  {path:"add", component:AddComponent},
  {path:"edit", component:EditComponent}, 
  {path:"centrelist", component:CentreListComponent},  
  {path:"addcentre", component:AddCentreComponent},  
  {path:"editcentre", component:EditCentreComponent}, 
  {path:"appointmentlist", component:AppointmentListComponent},  
  {path:"admin", loadChildren: () => import("./admin/admin.module").then((m) => m.AdminModule)},
  {path:"**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
