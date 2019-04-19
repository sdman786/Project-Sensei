import { Component, OnInit, Inject } from '@angular/core';
import { Activity } from 'src/app/models/session/activity/activity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity$: Activity;

  constructor(public dialogRef: MatDialogRef<ActivityComponent>,  @Inject(MAT_DIALOG_DATA) public data: Activity) {
    this.activity$ = this.data.selectedTask as Activity;
  }

  ngOnInit() {
    this.activity$.completed = false;
   }

  getActivity() {
    // return this.activity$.type === 'listMaker' ? true : false;
  }

  onSubmit() {
    this.activity$.completed = true;
  }

  completed(): boolean {
    return this.activity$.completed;
  }

  continue() {
  }

  previous() {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  exitLesson() {
    this.activity$ = null;
    this.dialogRef.close();
  }
}
