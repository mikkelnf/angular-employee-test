import { Component } from '@angular/core';
import { EmployeeService } from '../service/employee.service';
import { Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-employee-get-by-id',
  templateUrl: './employee-get-by-id.component.html',
  styleUrls: ['./employee-get-by-id.component.css']
})
export class EmployeeGetByIdComponent {
  public dataSource: any;

  public href: string = "";

  private subs = new Subscription();

  editEmployeeForm = this.formBuilder.group({
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
    private myDataService: EmployeeService,
    private router: Router,
    private datePipe: DatePipe
  ) {
  }

  ngOnInit(): void {
    this.href = this.router.url;
    let url = this.href.split("/")
    this.subs.add(this.myDataService.getById(url[url.length - 1])
      .subscribe((res) => {
      console.log(res)
        this.dataSource = res;
      }
    ))
  }
}
