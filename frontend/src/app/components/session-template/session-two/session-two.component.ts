import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { Session } from 'src/app/models/session/session';
import { Quiz } from 'src/app/models/session/quiz';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { Activity } from 'src/app/models/session/activity/activity';
import { MatDialog } from '@angular/material';
import { SessionService } from 'src/app/services/session.service';
import { QuizComponent } from '../../quiz/quiz.component';
import { LessonComponent } from '../../lesson/lesson.component';
import { ActivityComponent } from '../../activity/activity.component';

@Component({
  selector: 'app-session-two',
  templateUrl: './session-two.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionTwoComponent implements OnInit {

  private sessionTwo: Session;
  private sessionID = 2;
  private quiz: Quiz[];
  private lesson: Lesson[];
  private activity: Activity[];

  constructor(public dialog: MatDialog, private sessionService: SessionService) {
    this.quiz = [];
    this.lesson = [];
    this.activity = [];
  }

  ngOnInit(): void {
    this.sessionService.getSession(this.sessionID).then(session => {
      this.sessionTwo = new Session(session);
      this.sessionTwo['quiz'].forEach(q => {
      this.quiz.push(q);
      });
      this.sessionTwo['lesson'].forEach(l => {
        this.lesson.push(l);
      });
      this.sessionTwo['activity'].forEach(a => {
        this.activity.push(a);
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