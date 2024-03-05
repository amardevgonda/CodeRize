import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  username: string = '';
  password: string = '';
  error: string = '';

  constructor(private router: Router) { }

  login() {
    // For demonstration, hardcoded username and password
    if (this.username === 'admin' && this.password === 'password') {
      // Redirect to employee list page if login is successful
      this.router.navigate(['/employees']);
    } else {
      // Display error message if login fails
      this.error = 'Invalid username or password';
    }
  }
}
