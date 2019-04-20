import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user: User;

  constructor(private auth: AuthenticationService, private userService: UserService) {}

  ngOnInit() {
    this.user = this.userService.getUser();
  }
}
