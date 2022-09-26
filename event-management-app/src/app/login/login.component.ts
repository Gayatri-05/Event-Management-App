import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  msg:string =""
  loginRef=new FormGroup({
    email:new FormControl(),
    pass:new FormControl()
    });
  constructor(public router:Router) { }

  ngOnInit(): void {
  }

  checkUser(){
    let login = this.loginRef.value;
    if(login.email == "admin@gmail.com" && login.pass=="123"){
      this.router.navigate(["home"]);
  }else {
      this.msg = "Failure try once again";
  }
  }
}
