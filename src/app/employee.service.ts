import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = 'assets/employee.json'; 

  constructor(private http: HttpClient) { }


    // Get all employees
    getEmployees(): Observable<any[]> {
      return this.http.get<any[]>(this.apiUrl);
    }
  
    // Get employee by ID
    getEmployeeById(id: number): Observable<any> {
      return this.http.get<any[]>(`${this.apiUrl}/${id}`);
    }
  
    // Add new employee
    addEmployee(employee: any): Observable<any> {
      console.log("employee : ",employee);
      return this.http.post('assets/employee.json', employee);
    }
  


    // Update employee
    updateEmployee(employee: any): Observable<any> {
      return this.http.put<any>(`${this.apiUrl}/${employee.id}`, employee);
    }
  
    // Delete employee
    deleteEmployee(id: number) {
      return this.http.delete(`${this.apiUrl}/${id}`);
    
    }
}
