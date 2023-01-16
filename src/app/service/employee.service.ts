import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private http:HttpClient
  ){}

  getData(){
    return this.http.get('https://63c16764376b9b2e647ab380.mockapi.io/employee')
  }
}
