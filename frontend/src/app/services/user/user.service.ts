import { Injectable } from '@angular/core';
import { User } from '../../models/user/user';
import { AuthenticationService } from '../authentication/authentication.service';
import { HttpClient } from '@angular/common/http';
import { Upload } from 'src/app/models/upload';
import { Results } from 'src/app/models/results';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private user: User, private authService: AuthenticationService) { }

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

  // public updateUser(session: string, task: string, upload: Upload, result: Results) {
  //   let userUpdate;
  //   if (session) {
  //     this.user.session = session;
  //   }
  //   if (task) {
  //     this.user.task = task;
  //   }
  //   if (upload) {
  //     this.user.upload.push(upload);
  //   }
  //   if (result) {
  //     this.user.results.push(result);
  //   }
  //   userUpdate = { session, task, upload };
  //   console.log(this.user);
  //   this.authService.update(this.user).subscribe(res => {
  //     console.log(res.result);
  //   });
  // }

  public updateUser(data: any) {
    if (data.nextSession) {
      this.user.session = data.nextSession;
    }
    if (data.nextTask) {
      this.user.task = data.nextTask;
    }
    if (data.upload) {
      this.user.upload.push(data.upload);
    }
    if (data.result) {
      this.user.results.push(data.result);
    }
    console.log(this.user);
    this.authService.update(this.user).subscribe(res => {
      console.log(res.result);
    });
  }

}
