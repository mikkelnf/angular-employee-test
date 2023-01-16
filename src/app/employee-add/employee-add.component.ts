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
  maxDate: any;
  addEmployeeForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    birthDate: '',
    basicSalary: '',
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
  
  // ngOnInit(){
  //   if(
  //     this.addEmployeeForm.value.firstName != "" ||
  //     this.addEmployeeForm.value.lastName !== "" ||
  //     this.addEmployeeForm.value.username !== "" ||
  //     this.addEmployeeForm.value.email !== "" ||
  //     this.addEmployeeForm.value.birthDate !== "" ||
  //     this.addEmployeeForm.value.basicSalary !== "" ||
  //     this.addEmployeeForm.value.description !== "" 
  //   ){
  //     this.isEmpty = false;
  //   }
  // }

  onSubmit() {
  }
}
