import { Component, OnInit } from '@angular/core';
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';
import {FormGroup,FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employeeRef= new FormGroup({
    id:new FormControl(),
    first_name:new FormControl(),
    last_name:new FormControl(),
    email:new FormControl()
  }); 

  empObj : Employees = new Employees();

  employees:Array<Employees>=[]
  constructor(public es:EmployeesService,public router:Router) { }

  ngOnInit(): void {
    this.loadEmployeeDetails();

  }

  loadEmployeeDetails() {
    this.es.loadEmployeeData().subscribe({
      next:(data:any)=>this.employees=data,
      error:(error:any)=>console.log(error),
      complete:()=>console.log("Completed")
    })
  }

  storeEmployee(){
    let employees = this.employeeRef.value;
    this.es.storeEmployeeData(employees).subscribe({
      next:(data:any)=>console.log(data),
      error:(error:any)=>console.log(error),
      complete:()=>this.loadEmployeeDetails()
    })
    this.employeeRef.reset();
  }

  viewDetails(employees:any){
    sessionStorage.setItem("employeeInfo",JSON.stringify(employees));
    this.router.navigate(["employee-operation"]);
  }

}
