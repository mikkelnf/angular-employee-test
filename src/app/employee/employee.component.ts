import { Component, ViewChild } from '@angular/core';
import { Subscription, tap } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from '../service/employee.service';
import { Employee } from 'src/models/employee';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
  myData:any

  public dataSource: MatTableDataSource<Employee>;
  
  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'birthDate', 'basicSalary', 'status', 'group', 'description', 'action'];
  
  private subs = new Subscription();

  clickedRows = new Set<Employee>();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private myDataService:EmployeeService,
    private route:Router
  ){
  }

  ngOnInit(): void{
    this.subs.add(this.myDataService.getData()
    .subscribe((res) => {
      this.myData = res;
      this.dataSource = new MatTableDataSource<Employee>(this.myData);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }
    ))
  }

  clicked(row: any){
    this.route.navigate(["employee/" + row.id])
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
}
}
