import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuizComponent } from '../../quiz/quiz.component';
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionOneComponent implements OnInit {

  mcqName = '';
  lessonName = '';
  quizType: string;
  // quizResult;
  // lessonResult;

  constructor(private router: Router, public dialog: MatDialog) { }

  ngOnInit(): void {
    // this.sessionTemplate.quizType = this.quizType;
  }

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
    const dialogRef = this.dialog.open(LessonComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

}

@Component({
  selector: 'lesson-component',
  template: ''
})

export class LessonComponent {
  constructor() { }

  ngAfterViewInit(): void {

    // typeformEmbed.makePopup('https://salman829964.typeform.com/to/FOxG0c', { mode: 'popup', autoOpen: true });

      const reference = typeformEmbed.makePopup(
        'https://salman829964.typeform.com/to/FOxG0c',
        {
          mode: 'popup',
          autoClose: 3000,
          hideHeaders: true,
          hideFooters: true,
          onSubmit: function () {
            console.log('Typeform successfully submitted')
          }
        }
      )
      reference.open()

    // const embedElement = document.querySelector('#mat-dialog-0') 
    // // NOTE: `.target-dom-node` is the target DOM element from your website or web app

    // typeformEmbed.makeWidget(
    //   embedElement,
    //   'https://salman829964.typeform.com/to/FOxG0c', // NOTE: Replace with your typeform URL
    //   {
    //     hideHeaders: true,
    //     hideFooter: true,
    //     opacity: 75,
    //     buttonText: "Take the survey!",
    //     onSubmit: function () {
    //       console.log('Typeform successfully submitted')
    //     }
    //   }
    // )



  }
}
