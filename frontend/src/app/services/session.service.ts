import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Quiz } from '../models/session/quiz';
import { Lesson } from '../models/session/lesson/lesson';
import { Activity } from '../models/session/activity/activity';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from '../components/quiz/quiz.component';
import { AuthenticationService } from './authentication.service';
import { LessonComponent } from '../components/lesson/lesson.component';
import { ActivityComponent } from '../components/activity/activity.component';
import { User } from '../models/user/user';
import { Session } from '../models/session/session';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})

export class SessionService {

  baseSessionUrl = 'http://localhost:8080/session';
  public user$: User;
  public sessions: Session[];

  constructor(private http: HttpClient, public dialog: MatDialog, private userService: UserService) { }

  get_Session(sessionID: number) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseSessionUrl).subscribe(res => {
        res.forEach(session => {
          if (session.id === sessionID) {
            this.sessions.push(session);
            resolve(this.sessions);
          }
        });
      });
    });
  }

  getSession() {
    return new Promise((resolve, reject) => {
    this.http.get<any>(this.baseSessionUrl).subscribe(res => {
      while (!this.user$ || !this.user$.username) {
        this.user$ = this.userService.getUser() as User;
      }
      res.forEach(session => {
        if (session.name === this.user$.session) {
          resolve(session);
        }
      });
      });
    });
  }

  getUser() {
    this.user$ = this.userService.getUser() as User;
  }

  public getActiveTask(): string {
    if (!this.user$) {
      return '';
    }
    return this.user$.task;
  }

  openTask(selectedTask: Quiz | Activity | Lesson): void {
    let component;
    if (selectedTask instanceof Quiz) {
      component = QuizComponent;
    }
    if (selectedTask instanceof Activity) {
      component = ActivityComponent;
    }
    if (selectedTask instanceof Lesson) {
      component = LessonComponent;
    }
    const dialogRef = this.dialog.open(component, {
      disableClose: true,
      data: { selectedTask }
    });

    dialogRef.afterClosed().subscribe(result => {
      // this.sideBar.closeTask(result);
      // this.user$.task;
    });
  }

}


