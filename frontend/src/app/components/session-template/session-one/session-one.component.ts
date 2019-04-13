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
  private quiz: Quiz;

  private lesson: Lesson;
  private activity: Activity;

  constructor(private router: Router, public dialog: MatDialog, private sessionService: SessionService) {
    this.sessionService.get_Session('session-one').subscribe(res => {
      this.sessionOne = new Session(res[0]);
    });
    this.quiz = this.sessionOne.quiz;
    this.lesson = this.sessionOne.lesson;
    this.activity = this.sessionOne.activity;
  }

  ngOnInit(): void { }

  openQuiz(quizName: string): void {
    let currentQuiz;
    const dialogRef = this.dialog.open(QuizComponent, {
      disableClose: true,
      data: { currentQuiz }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.quizResult = result;
    });
  }


  openLesson(lesson: Lesson, lessonName: string): void {
    if (!lesson && lessonName) {
      lesson = this.getTaskData().lesson.taskName;
    }
    const dialogRef = this.dialog.open(LessonComponent, {
      disableClose: true,
      data: { lesson }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.quizResult = result;
    });
  }

  openActivity(activity: Activity, activityName: string): void {
    if (!activity && activityName) {
      activity = this.getTaskData().activity.taskName;
    }
    const dialogRef = this.dialog.open(ActivityComponent, {
      disableClose: true,
      data: { activity }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.quizResult = result;
    });
      }

  getTaskData(): any {
    this.sessionService.get_Session('session-one').subscribe(res => {
       const result = res[0];
       return result;
    });
  }
}

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
