import { Component, OnInit, Inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

// import { LessonData } from './lesson-data';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.scss']
})
export class LessonComponent implements OnInit {

  lessonName = '';
  lessonComplete = false;

  constructor(public dialogRef: MatDialogRef<LessonComponent>) { }

  ngOnInit() {
    // this.lessonName = this.data.lessonName;
    // this.lessonComplete = this.data.lessonComplete;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
