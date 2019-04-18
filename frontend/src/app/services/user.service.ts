import { Injectable } from '@angular/core';
import { User } from '../models/user/user';
import { AuthenticationService } from './authentication.service';
import { hasOwnProp, isString } from 'ngx-bootstrap/chronos/utils/type-checks';
import { isBoolean } from 'util';
import { SidebarComponent } from '../components/session/sidebar/sidebar.component';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _user: User, private authService: AuthenticationService) { }

  createUser() {
    return new Promise((resolve, reject) => {
      this.authService.profile().subscribe(res => {
        this._user = res as User;
        resolve(this._user);
      });
        // return this.sessions;
      });
    // });
    // this.authService.profile().subscribe(res => {
    //   this._user = res as User;
    // });
  }

  // Check if User is logged in or not
  isLoggedIn(): boolean {
    // if (!this._user.username) {
    //  this.createUser();
    // }
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


  getUser() {
    if (!this._user.username) {
      setTimeout(() => {
        return this._user;
      }, 2000);
    }
    return this._user;
  }


  public getActiveTask(): string {
    return this._user.task;
  }

  updateUser(data: boolean | string) {
    // if (isBoolean(data) && data) {
    //   this.sideBar.nextTask();
    // } else
    // if (isString(data) && data === 'complete') {
    //   this.sideBar.nextSession();
    // }
  }

}
