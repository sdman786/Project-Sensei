import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from '../../quiz/quiz.component';
import { Quiz } from 'src/app/models/session/quiz';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { Activity } from 'src/app/models/session/activity/activity';
import { SessionService } from 'src/app/services/session.service';
import { LessonComponent } from '../../lesson/lesson.component';
import { ActivityComponent } from '../../activity/activity.component';
import { Session } from 'src/app/models/session/session';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionThreeComponent {

  private sessionThree: Session;
  private sessionID = 3;
  private quiz: Quiz[];
  private lesson: Lesson[];
  private activity: Activity[];

  constructor(public dialog: MatDialog, private sessionService: SessionService) {
    this.quiz = [];
    this.lesson = [];
    this.activity = [];
  }

  ngOnInit(): void {
  // this.sessionService.getSession(this.sessionID).then(session => {
  //   this.sessionThree = new Session(session);
  //   this.sessionThree.quiz.forEach(q => {
  //   this.quiz.push(q);
  //   });
  //   this.sessionThree.lesson.forEach(l => {
  //     this.lesson.push(l);
  //   });
  //   this.sessionThree.activity.forEach(a => {
  //     this.activity.push(a);
  //   });
  // });

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
