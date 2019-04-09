import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { QuizComponent } from '../quiz/quiz.component';
import { QuizData } from '../quiz/quiz-data';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionOneComponent implements OnInit {

  mcqName = '';
  lessonName = '';
  // quizResult;
  // lessonResult;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openQuiz(quizType: string): void {
    const dialogRef = this.dialog.open(QuizComponent, {
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

  // openQuiz( quizType: string) {
  //   this.router.navigateByUrl('/quiz', { state: { mcqName: quizType } });
  // }

  // openDialog() {
  //   const dialogRef = this.dialog.open(SessionOne);

  //   dialogRef.afterClosed().subscribe(result => {
  //     console.log(`Dialog result: ${result}`);
  //   });
  // }

}
