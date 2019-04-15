import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuizComponent } from '../../quiz/quiz.component';
import * as typeformEmbed from '@typeform/embed';
import { LessonComponent } from '../../lesson/lesson.component';
import { SessionService } from 'src/app/services/session.service';
import { Activity } from 'src/app/models/session/activity/activity';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { Quiz } from 'src/app/models/session/quiz';
import { ActivityComponent } from '../../activity/activity.component';
import { Session } from 'src/app/models/session/session';
import { User } from 'src/app/models/user/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';
import { ActiveTaskDirective } from '../active-task.directive';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionOneComponent implements OnInit {

  public user$: User;
  private sessionOne: Session;
  private sessionID = 1;
  private quiz: Quiz[];
  private lesson: Lesson[];
  private activity: Activity[];

  constructor(public dialog: MatDialog,private auth: AuthenticationService,private sessionService: SessionService) {
    this.quiz = [];
    this.lesson = [];
    this.activity = [];
  }

  ngOnInit(): void {
    this.auth.profile().subscribe(user => {
      this.user$ = user;
    });
  }

  openQuiz(quizName: string): void {
    this.quiz.forEach(selectedQuiz => {
      if (selectedQuiz.name === quizName) {
        const dialogRef = this.dialog.open(QuizComponent, {
          disableClose: true,
          data: { selectedQuiz }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
      }
    });
  }


  openLesson(lessonName: string): void {
    this.lesson.forEach(selectedLesson => {
      if (selectedLesson.name === lessonName) {
        const dialogRef = this.dialog.open(LessonComponent, {
          disableClose: true,
          data: { selectedLesson }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
      }
    });
  }

  openActivity(activityName: string): void {
    this.activity.forEach(selectedActivity => {
      if (selectedActivity.name === activityName) {
        const dialogRef = this.dialog.open(ActivityComponent, {
          disableClose: true,
          data: { selectedActivity }
        });

        dialogRef.afterClosed().subscribe(result => {
          console.log(result);
        });
      }
    });
  }
}

//   getTaskData(): any {
//     this.sessionService.get_Session('session-one').subscribe(res => {
//        const result = res[0];
//        return result;
//     });
//   }
// }

// @Component({
//   selector: 'lesson-component',
//   template: ''
// })

// export class LessonComponent {
//   constructor() { }

//   ngAfterViewInit(): void {

//     // typeformEmbed.makePopup('https://salman829964.typeform.com/to/FOxG0c', { mode: 'popup', autoOpen: true });

//     // const reference = typeformEmbed.makePopup(
//     //   'https://salman829964.typeform.com/to/FOxG0c',
//     //   {
//     //     mode: 'popup',
//     //     autoClose: 3000,
//     //     hideHeaders: true,
//     //     hideFooters: true,
//     //     onSubmit: function () {
//     //       console.log('Typeform successfully submitted')
//     //     }
//     //   }
//     // )
//     // reference.open();


//   }
// }
