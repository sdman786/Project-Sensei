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

  activity$?: Activity;

  constructor(private router: Router, public dialogRef: MatDialogRef<ActivityComponent>,  @Inject(MAT_DIALOG_DATA) public data: Activity) {
    this.activity$ = new Activity(this.data.selectedTask);
  }

  ngOnInit() { }

  getActivity() {
    return this.activity$.type === 'listMaker' ? true : false;
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
