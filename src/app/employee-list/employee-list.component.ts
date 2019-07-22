import { Observable } from "rxjs";
import { EmployeeService } from "./../employee.service";
import { Employee } from "./../employee";
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Observable<Employee[]>;
  constructor(private employeeService: EmployeeService,
              private router: Router) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.employees = this.employeeService.getEmployeesList();
  }

  getSortedEmployeesList(sortingCriteria: string) {
    this.employeeService.getSortedEmployeesList(sortingCriteria)
      .subscribe(
        data => {
          this.employees = data.empList;
        },
        error => console.log(error));
  }

  getEmployeeDetails(id: number) {
    this.employeeService.getEmployeeDetails(id)
      .subscribe(
        data => {
          this.router.navigate(['/employeeDetail', id]);
        },
        error => console.log(error));

  }

}
