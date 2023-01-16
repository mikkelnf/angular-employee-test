import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-add',
  templateUrl: './employee-add.component.html',
  styleUrls: ['./employee-add.component.css']
})
export class EmployeeAddComponent {
  isEmpty: Boolean = true;
  isValidEmail: Boolean;
  maxDate: any;
  addEmployeeForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    birthDate: '',
    basicSalary: '',
    group: '',
    status: '',
    description: '',
  });

  constructor(
    private formBuilder: FormBuilder,
    private route: Router,
    private datePipe: DatePipe
  ) {
    this.maxDate = new Date()
    this.maxDate = this.datePipe.transform(this.maxDate, 'yyyy-MM-dd');
  }

  myFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    return day != 0
  };

  onSubmit() {
    if(this.addEmployeeForm.value.email?.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
      this.isValidEmail = true
    }else{
      this.isValidEmail = false
    }
    if(this.isValidEmail === true){
      this.addEmployeeForm.reset()
    }
  }
}
