import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  employees: any[] = [];
  selectedEmployee: any;

  constructor(private employeeService: EmployeeService,private router: Router) { }

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.employeeService.getEmployees().subscribe((data: any[]) => {
      this.employees = data;
    });
  }

  updateEmployee(employee: any) {
 
    this.selectedEmployee = employee;
  }

  deleteEmployee(id: number) {
    this.employeeService.deleteEmployee(id).subscribe(() => {
      this.employees = this.employees.filter(e => e.id !== id);
    });
  }


  submitUpdate() {
    this.employeeService.updateEmployee(this.selectedEmployee).subscribe(() => {
      this.loadEmployees(); 
    });
  }

  addEmp(){
    this.router.navigateByUrl('addEmp')
  }
}
