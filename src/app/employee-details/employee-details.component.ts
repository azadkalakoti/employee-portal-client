import {Component, Input, OnInit} from '@angular/core';
import { Employee } from './../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})

export class EmployeeDetailsComponent implements OnInit {

  public employee: any;
  constructor(private employeeService: EmployeeService,
              private listComponent: EmployeeListComponent,
            private route: ActivatedRoute) {

  }

  ngOnInit() {
    let sub = this.route.params.subscribe(params => {
      this.employeeService.getEmployeeDetails(params['id'])
        .subscribe(
          data => {
           this.employee = data;
          },
          error => console.log(error));
    });

  }

}
