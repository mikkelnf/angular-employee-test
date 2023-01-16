import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  addEmployeeForm = this.formBuilder.group({
    username: '',
    password: ''
  });
  
  constructor(
    private formBuilder: FormBuilder,
    private route:Router
  ){}

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };
  
  onSubmit(){
  }
}
