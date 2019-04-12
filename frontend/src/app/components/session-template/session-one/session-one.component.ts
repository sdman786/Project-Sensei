import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { QuizComponent } from '../../quiz/quiz.component';
import * as typeformEmbed from '@typeform/embed'
import { QuizService } from 'src/app/services/quiz.service';
import { LessonComponent } from '../../lesson/lesson.component';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionOneComponent implements OnInit {

  mcqName = '';
  lessonName = '';
  quizType: string;

  constructor( private router: Router, public dialog: MatDialog, private quizService: QuizService ) { }

  ngOnInit(): void { }

  openQuiz(quizName: string): void {
    this.quizService.get_MCQ(quizName).subscribe(res => {
      const dialogRef = this.dialog.open( QuizComponent, {
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
    const dialogRef = this.dialog.open( LessonComponent, {
      disableClose: true,
      data: {
          name: lessonName
        }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      // this.quizResult = result;
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
