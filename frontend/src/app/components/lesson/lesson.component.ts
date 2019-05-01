import { Component, OnInit, Inject, HostListener } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { isEmpty } from 'rxjs/operators';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lesson$: Lesson;
  lessonContent: string[];
  lessonContent$: string;
  mode: string;

  constructor(public dialogRef: MatDialogRef<LessonComponent>,  @Inject(MAT_DIALOG_DATA) public data: Lesson) {
    this.lesson$ = this.data.selectedTask as Lesson;
    this.lessonContent = this.lesson$.content;
    this.lessonContent$ = this.lessonContent[0];
    this.mode = 'lesson';
  }

  ngOnInit() {
  }

  @HostListener('window:keyup', ['$event'])
  keyEvent(event: KeyboardEvent) {
    console.log(event);
    if (event.keyCode === 13) {
      this.nextSlide();
    }
  }

  nextSlide() {
    if (this.lessonContent[1]) {
      this.lessonContent.shift();
      this.lessonContent$ = this.lessonContent[0];
    } else
    if (!this.lessonContent[1]) {
      this.mode = 'complete';
      this.onSubmit();
    }
  }

  onKeyup(event) {
    console.log('Keyup Enter', event);
  }

  onSubmit() {
    this.lesson$.completed = true;
    console.log('Lesson Completed');
  }

  completed(): boolean {
    this.onSubmit();
    return this.lesson$.completed;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  exitLesson() {
    this.lesson$.completed = false;
    this.dialogRef.close();
  }
}
