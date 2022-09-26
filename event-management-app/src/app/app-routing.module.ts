import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from './login/login.component';
import { EmployeesComponent } from "./employees/employees.component";
import { EmployeeOperationComponent } from './employee-operation/employee-operation.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginComponent},
  {path:"employees",component:EmployeesComponent},
  {path:"employee-operation",component:EmployeeOperationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
