import { Component, OnInit } from '@angular/core';
import { AuthenticationService, TokenPayload } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  user: TokenPayload = {
    username: '',
    password: '',
  };

  constructor(private auth: AuthenticationService, private router: Router) {}
  appComponent = new AppComponent(this.auth, this.router);

  login() {
    this.auth.login(this.user).subscribe(() => {
      alert('Login Successful! Welcome ' + this.user.username);
      this.router.navigateByUrl('/home');
      this.appComponent.getUser();
    }, (err) => {
      console.error(err);
      alert('Login Unsuccessful! Incorrect Username/Password');
    });
  }
}