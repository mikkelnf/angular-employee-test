import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeAddComponent } from './employee-add/employee-add.component';
import { EmployeeGetByIdComponent } from './employee-get-by-id/employee-get-by-id.component';
import { EmployeeComponent } from './employee/employee.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {component:LoginComponent, path:'login'},
  {component:EmployeeComponent, path:'employee'},
  {component:EmployeeAddComponent, path:'employee/add'},
  {component:EmployeeGetByIdComponent, path:'employee/:id'},
  {redirectTo: '/login', pathMatch: 'full', path: ''},
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }