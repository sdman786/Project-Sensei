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

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionOneComponent implements OnInit {

  private sessionOne: Session;
  private quiz: Quiz[];
  private lesson: Lesson[];
  private activity: Activity[];

  constructor(public dialog: MatDialog, private sessionService: SessionService) {
    this.quiz = [];
    this.lesson = [];
    this.activity = [];
  }

  ngOnInit(): void {
  this.getSession().then(sessionOne => {
    sessionOne['quiz'].forEach(q => {
    this.quiz.push(q);
    });
    sessionOne['lesson'].forEach(l => {
      this.lesson.push(l);
    });
    sessionOne['activity'].forEach(a => {
      this.activity.push(a);
    });
  });
 
  }

  private getSession() {
    return new Promise((resolve, reject) => {
      this.sessionService.get_Session().subscribe(res => {
        res.forEach(session => {
          if (session.id === 1) {
            resolve(this.sessionOne = new Session(session));
          }
        });
      });
    });
  }


  openQuiz(quizName: string): void {
    this.quiz.forEach(selectedQuiz => {
      if (selectedQuiz.name.toLowerCase() === quizName) {
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
      if (selectedLesson.name.toLowerCase() === lessonName) {
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
      if (selectedActivity.name.toLowerCase() === activityName) {
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
