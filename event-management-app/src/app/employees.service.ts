import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employees } from "./employees";

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(public http:HttpClient) { }

  loadEmployeeData():Observable<Employees[]>{
    return this.http.get<Employees[]>(" http://localhost:3000/employees");
  }

  storeEmployeeData(employees:any):Observable<Employees>{
    return this.http.post<Employees>(" http://localhost:3000/employees",employees);
  }

  // it is consider as path param 
  findEmployeeById(id:any):Observable<Employees>{
    return this.http.get<Employees>(" http://localhost:3000/employees/"+id);
  }

  // it will delete using path param 
  delete(id:any):Observable<any>{
    return this.http.delete<any>(" http://localhost:3000/employees/"+id);
  }

  updateEmployee(employees:Employees):Observable<Employees>{
    return this.http.put<Employees>("http://localhost:3000/employees",employees);
  }
}
