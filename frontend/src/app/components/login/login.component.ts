import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: User = {
    username: '',
    password: ''
  };

  constructor(private auth: AuthenticationService, private router: Router, private userService: UserService) {}
  // appComponent = new AppComponent(this.auth, this.router);

  login() {
    this.auth.login(this.user).subscribe(() => {
      this.userService.createUser();
      // alert('Login Successful! Welcome ' + this.user.username);
      this.router.navigateByUrl('/home');
      // this.appComponent.getUser();
    }, (err) => {
      console.error(err);
      alert('Login Unsuccessful! Incorrect Username/Password');
    });
  }
}