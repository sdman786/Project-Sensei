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
import { SessionStructure } from '../models/session/session-structure';
import { timeout, isEmpty } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})

export class SessionService {

  baseSessionUrl = 'http://localhost:8080/session';
  baseSessionStructureUrl = 'http://localhost:8081/session-structure';

  // public user$: User;

  public sessionStructure: SessionStructure[];
  public sessions: Session[];
  private sessionOne: Session;
  private sessionTwo: Session;
  private sessionThree: Session;
  private sessionOneId = 1;
  private sessionTwoId = 2;
  private sessionThreeId = 3;

  constructor(private http: HttpClient, public dialog: MatDialog, private userService: UserService) {
   this.sessionStructure = [];
   this.sessions = [];
  }

  getSessionStructure() {
    this.http.get<any>(this.baseSessionStructureUrl).subscribe(structureArray => {
     structureArray.forEach(session => {
        this.sessionStructure.push(session);
      });
    });
  }

  getAllSessions() {
    // this.http.get<any>(this.baseSessionUrl);
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseSessionUrl).subscribe(sessionArray => {
        // while (!this.user$ || !this.user$.username) {
        //   this.user$ = this.userService.getUser() as User;
        // }
        sessionArray.forEach(session => {
          this.sessions.push(session as Session);
          // if (session.name === this.user$.session) {
            // resolve(this.sessions);
          //   session
          // }
        });
        resolve(this.sessions);
        // return this.sessions;
      });
    });
  }

  getSession() {
    return this.sessions;
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
      console.log(result);
      if (result) {
        this.userService.updateUser(result);
      }
      // this.sideBar.closeTask(result);
      // this.user$.task;
    });
  }

}


