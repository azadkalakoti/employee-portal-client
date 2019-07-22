import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  getSortedEmplyeeList(sortingCriteria: string) {
    this.employeeService.getSortedEmployeesList(sortingCriteria)
      .subscribe(
        data => {
        },
        error => console.log(error));
  }
  getEmployeeDetails(id: number) {
    this.employeeService.getEmployeeDetails(id)
      .subscribe(
        data => {
        },
        error => console.log(error));

    this.employeeService.getEmployeeDetails(id).subscribe(
      (data: any) => {
        },
        error => console.log(error));
  }

}
