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
    this.reloadData(false);
  }

  /**
   * Reloads data
   * @param isSorted
   */
  reloadData(isSorted) {
    if (!isSorted) {
      this.employees = this.employeeService.getEmployeesList();
    }
  }

  /**
   * Calls getSortedEmployeesList service and retrieves a sorted
   * list of employees
   * @param sortingCriteria - sorting key
   */
  getSortedEmployeesList(sortingCriteria: string) {
    this.employeeService.getSortedEmployeesList(sortingCriteria)
      .subscribe(
        data => {
          this.employees = data.empList;
          //this.$route.reload();
        },
        error => console.log(error));
  }

  /**
   * Calls getEmployeeDetails service and retrieves
   * Employee's details
   * @param id - Employee ID
   */
  getEmployeeDetails(id: number) {
    this.employeeService.getEmployeeDetails(id)
      .subscribe(
        data => {
          this.router.navigate(['/employeeDetail', id]);
        },
        error => console.log(error));

  }

}
