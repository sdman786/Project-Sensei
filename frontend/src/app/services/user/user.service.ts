import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { AuthenticationService } from '../authentication/authentication.service';
import { hasOwnProp, isString } from 'ngx-bootstrap/chronos/utils/type-checks';
import { isBoolean } from 'util';
import { SidebarComponent } from '../../components/session/sidebar/sidebar.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseAuthUrl = 'http://localhost:3000/authapi/';

  constructor(private user: User, private authService: AuthenticationService, private http: HttpClient) { }

  createUser() {
    return new Promise((resolve, reject) => {
      this.authService.profile().subscribe(res => {
        this.user = res as User;
        resolve(this.user);
      });
    });
  }

  // Check if User is logged in or not
  isLoggedIn(): boolean {
    const user = this.authService.getUserToken();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  destroyUser() {
    for (const details in this.user) {
      if (details) {
        this.user[details] = null;
      }
    }
    this.authService.logout();
  }


  getUser() {
    if (!this.user.username) {
      setTimeout(() => {
        return this.user;
      }, 2000);
    }
    return this.user;
  }


  public getActiveTask(): string {
    return this.user.task;
  }

  public getActiveSession(): string {
    return this.user.session;
  }

  public updateUser(session: string, task: string): boolean {
    let userUpdate;
    let result = false;
    if (session) {
      this.user.session = session;
    }
    if (task) {
      this.user.task = task;
    }
    userUpdate = { session, task };
    console.log(this.user);
    this.authService.update(this.user).subscribe(res => {
      console.log(res.result);
      result = true;
    });
    return result;
    // this.http.post(`${this.baseAuthUrl}/update`, this.user).subscribe( res => { });
    // Update user DB
  }

}
