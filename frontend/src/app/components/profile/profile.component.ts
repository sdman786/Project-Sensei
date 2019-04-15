import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/models/user/user';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User;

  constructor(private auth: AuthenticationService) {}

  ngOnInit() {
    this.auth.profile().subscribe(user => {
      this.user = user;
    }, (err) => {
      console.error(err);
    });
  }
}
