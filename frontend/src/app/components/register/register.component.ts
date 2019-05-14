import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/models/user/user';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent {
  user: User = {
    username: '',
    name: '',
    email: '',
    password: '',
    session: 'session-one',
    task: 'introduction',
    upload: [],
    results: []
    };

  constructor(private auth: AuthenticationService, private snackBar: MatSnackBar, private router: Router) { }

  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }

  register() {
    this.auth.register(this.user).subscribe((data:any) => {
		console.log("data", data);
		if(!data.userExists){
			this.snackBar.open('Registration Successful! Welcome to Project Sensei', 'OK', {
			  duration: 3000,
			});
			this.router.navigateByUrl('/home');
		}else{
			this.snackBar.open('That username already exists!', 'OK', {
			  duration: 3000,
			});
		}
		
    }, (err) => {
      if (!this.user.username || !this.user.password || !this.user.name || !this.user.email) {
        this.snackBar.open('All fields must be filled', '', {
          duration: 3000,
        });
      } else {
        this.snackBar.open('Username or Password already Taken', '', {
          duration: 3000,
        });
      }
      console.error(err);
    });
  }
}
