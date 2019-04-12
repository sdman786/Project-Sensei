import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuizComponent } from '../../quiz/quiz.component';
import * as typeformEmbed from '@typeform/embed';
import { LessonComponent } from '../../lesson/lesson.component';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionOneComponent implements OnInit {

  mcqName = '';
  lessonName = '';
  quizType: string;

  constructor(private router: Router, public dialog: MatDialog, private sessionService: SessionService) { }

  ngOnInit(): void { }

  openQuiz(quizName: string): void {
    this.sessionService.get_Quiz(quizName).subscribe(res => {
      const dialogRef = this.dialog.open(QuizComponent, {
        disableClose: true,
        data: { res }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        // this.quizResult = result;
      });
    }
    );
  }

  openLesson(lessonName: string): void {
    this.sessionService.get_Lesson(lessonName).subscribe(res => {
      const dialogRef = this.dialog.open(LessonComponent, {
        disableClose: true,
        data: { res }
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log(result);
        // this.quizResult = result;
      });
    }
    );
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
