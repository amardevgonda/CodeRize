import { Component } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  
  newEmployee: any = {
    id: 0,
    name: '',
    email: '',
    department: '',
    position: '',
    joiningDate: ''
  };




  constructor(private employeeService: EmployeeService) {
    this.onSubmit();
   
  }


  onSubmit() {
    // Assuming you want to assign a unique ID to each new employee
    this.newEmployee.id = Math.floor(Math.random() * 1000) + 1;
    console.log(this.newEmployee.id);


    this.employeeService.addEmployee(this.newEmployee).subscribe((data: any) => {
      console.log(data);

      // Reset form after successful submission
      this.newEmployee = {
        id: 0,
        name: '',
        email: '',
        department: '',
        position: '',
        joiningDate: ''
      };
    });
  }

}
