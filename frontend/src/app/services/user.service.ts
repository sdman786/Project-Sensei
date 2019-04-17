import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { AuthenticationService } from './authentication.service';
import { hasOwnProp } from 'ngx-bootstrap/chronos/utils/type-checks';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _user: User, private authService: AuthenticationService) { }

  createUser() {
    this.authService.profile().subscribe(res => {
      if (!this._user.username) {
        this._user = res as User;
      }
    });
  }

  getUser() {
    if (!this._user.username) {
      setTimeout(() => {
        return this._user;
      }, 2000);
    }
    return this._user;
  }

    // Check if User is logged in or not
     isLoggedIn(): boolean {
      if (!this._user.username) {
        this.createUser();
      }
      const user = this.authService.getUserToken();
      if (user) {
        return user.exp > Date.now() / 1000;
      } else {
        return false;
      }
    }

  destroyUser() {
    for (let details in this._user) {
      if (details) {
        this._user[details] = null;
      }
    }
    this.authService.logout();
  }

}
