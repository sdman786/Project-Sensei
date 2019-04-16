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

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  baseSessionUrl = 'http://localhost:8080/session';
  public user$: User;

  constructor(private http: HttpClient, public dialog: MatDialog, private auth: AuthenticationService) {
    this.auth.profile().subscribe(user => {
      this.user$ = user;
    });
  }

  get_Session(sessionID: number) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseSessionUrl).subscribe(res => {
        res.forEach(session => {
          if (session.id === sessionID) {
            resolve(session);
          }
        });
      });
    });
  }

  getSession() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseSessionUrl).subscribe(res => {
        res.forEach(session => {
          if (session.name === this.user$.session) {
            resolve(session);
          }
        });
      });
    });
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
      console.log(result);
    });
  }

}
// getQuizDetails(quiz: Quiz, quizName: string): Quiz {
//   quiz.forEach(selectedQuiz => {
//     if (selectedQuiz.name === quizName) {
//       return selectedQuiz;
//     }
//   });
//   return null;
// }

  // openLesson(lesson: Lesson[], lessonName: string): void {
  //   lesson.forEach(selectedLesson => {
  //     if (selectedLesson.name === lessonName) {
  //       const dialogRef = this.dialog.open(LessonComponent, {
  //         disableClose: true,
  //         data: { selectedLesson }
  //       });

  //       dialogRef.afterClosed().subscribe(result => {
  //         console.log(result);
  //       });
  //     }
  //   });
  // }

  // openActivity(activity: Activity[], activityName: string): void {
  //   activity.forEach(selectedActivity => {
  //     if (selectedActivity.name === activityName) {
  //       const dialogRef = this.dialog.open(ActivityComponent, {
  //         disableClose: true,
  //         data: { selectedActivity }
  //       });

  //       dialogRef.afterClosed().subscribe(result => {
  //         console.log(result);
  //       });
  //     }
  //   });
  // }
// }

