import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Lesson } from 'src/app/models/lesson/lesson';

// import { LessonData } from './lesson-data';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lesson$: Lesson;
  lessonId: number;
  lessonName = '';
  lessonComplete = false;
  lessonDescription = '';

  constructor(public dialogRef: MatDialogRef<LessonComponent>,  @Inject(MAT_DIALOG_DATA) public data: Lesson) {
    this.lesson$ = new Lesson(this.data);
    this.lesson$.id = this.lessonId;
    this.lessonName = this.lesson$.name.replace(/-/, ' ');
    this.lesson$.completed = this.lessonComplete;
    this.lesson$.description = this.lessonDescription;
  }

  ngOnInit() {
    // this.lessonName = this.data.lessonName;
    // this.lessonComplete = this.data.lessonComplete;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
