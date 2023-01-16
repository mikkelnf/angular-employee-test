import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  isLogin:Boolean;

  constructor(
    private formBuilder: FormBuilder,
    private route:Router
  ){}

  loginForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  

  onSubmit(){
    if(this.loginForm.value.username==="admin" && this.loginForm.value.password==="admin"){
      this.isLogin = true
      this.route.navigate(["employee"])
    }else{
      this.isLogin = false
    }
    console.log(this.loginForm)
  }
}
