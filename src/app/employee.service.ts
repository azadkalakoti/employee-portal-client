import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = '/api/employees';

  constructor(private http: HttpClient) { }

  getEmployeeDetails(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createEmployee(employee: object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, employee);
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getSortedEmployeesList(sortingCriteria: string): Observable<any> {
    return this.http.get(`${this.baseUrl + '/sorted?type='}` + sortingCriteria);
  }
}
