import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog } from '@angular/material/dialog';
import { QuizComponent } from '../../quiz/quiz.component';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionThreeComponent {

  mcqName = '';
  lessonName = '';
  quizType: string;

  constructor(private router: Router, public dialog: MatDialog) { }

  openQuiz(quizType: string): void {
    const dialogRef = this.dialog.open(QuizComponent, {
      disableClose: true,
      data: {
            mcqName: quizType
          }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.quizResult = result;
    });
  }

  openLesson(lessonType: string): void {
  //   const dialogRef = this.dialog.open(LessonComponent, {
  //     data: {
  //           lessonName: lessonType
  //         }
  //   });
  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(result);
  //     // this.lessonComplete = result;
  //   });
  }
}
