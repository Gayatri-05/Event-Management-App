import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms'
import { Employees } from '../employees';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-operation',
  templateUrl: './employee-operation.component.html',
  styleUrls: ['./employee-operation.component.css']
})
export class EmployeeOperationComponent implements OnInit {
  empDetail !: FormGroup;
  employeeRef= new FormGroup({
    id:new FormControl(),
    first_name:new FormControl(),
    last_name:new FormControl(),
    email:new FormControl()
  });
  empObj : Employees = new Employees();
  empList : Employees[] = [];
  employees:any;
  constructor(public formBuilder : FormBuilder,public router:Router,public es:EmployeesService) { }

  ngOnInit(): void {
    let obj = sessionStorage.getItem("employeeInfo");
    if(obj != null){
        this.employees= JSON.parse(obj);
    }
    this.empDetail = this.formBuilder.group({
      id : [''],
      first_name : [''],
      last_name: [''],
      email: ['']
    }); 
  }

  ViewAll(){
    this.router.navigate(["employees"]);
}

deleteEmployee(id:any){
    this.es.delete(id).subscribe({
      next:(result:any)=>console.log(result),
      error:(error:any)=>console.log(error),
      complete:()=>console.log("completed")
    })
}

updateEmployee(employees:Employees) {

  this.empObj.id = this.empDetail.value.id;
    this.empObj.first_name = this.empDetail.value.first_namename;
    this.empObj.last_name = this.empDetail.value.last_name;
    this.empObj.email = this.empDetail.value.email;
      this.es.updateEmployee(employees).subscribe({
        next:(result:any)=>console.log(result),
        error:(error:any)=>console.log(error),
        complete:()=>console.log("completed"),
      })
      alert('Employee updated successfully');
}
}
