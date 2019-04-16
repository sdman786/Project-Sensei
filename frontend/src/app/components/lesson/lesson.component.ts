import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Lesson } from 'src/app/models/session/lesson/lesson';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lesson$: Lesson;

  constructor(public dialogRef: MatDialogRef<LessonComponent>,  @Inject(MAT_DIALOG_DATA) public data: Lesson) {
    this.lesson$ = new Lesson(this.data.selectedTask);
  }

  ngOnInit() { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  exitLesson() {
    this.lesson$ = null;
    this.dialogRef.close();
  }
}
