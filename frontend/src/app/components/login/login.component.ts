import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: TokenPayload = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router) {}

  login() {
    this.auth.login(this.user).subscribe(() => {
      alert('Login Successful! Welcome ' + this.user.name.toString);
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
      alert('Login Unsuccessful! Incorrect Username/Password');
    });
  }
}