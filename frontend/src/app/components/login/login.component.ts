import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/services/authentication/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';

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

  constructor(private auth: AuthenticationService, private router: Router, private userService: UserService,
              private snackBar: MatSnackBar, ) {}
  // appComponent = new AppComponent(this.auth, this.router);

  login() {
    this.auth.login(this.user).subscribe(() => {
      this.userService.createUser();
      this.snackBar.open('Login Successful! Welcome to Project Sensei', '', {
        duration: 3000,
      });
      this.router.navigateByUrl('/home');
    }, (err) => {
      console.error(err);
      if (!this.user.username || !this.user.password) {
        this.snackBar.open('Username and Password Must Be Filled must be filled', '', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Login Unsuccessful! Incorrect Username/Password', '', {
          duration: 3000,
        });
      }
    });
  }
}