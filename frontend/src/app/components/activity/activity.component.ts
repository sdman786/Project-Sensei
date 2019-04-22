import { Component, OnInit, Inject } from '@angular/core';
import { Activity } from 'src/app/models/session/activity/activity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ListItem } from './list-maker/list-maker.component';
import { UserService } from 'src/app/services/user/user.service';
import { Upload } from 'src/app/models/session/upload';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity$: Activity;
  listData: ListItem[];

  constructor(public dialogRef: MatDialogRef<ActivityComponent>,  @Inject(MAT_DIALOG_DATA) public data: Activity,
              private userService: UserService) {
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
    if (this.listData) {
      const listUpload: Upload = { id: 1, name: 'product backlog', data: JSON.stringify(this.listData)};
      this.userService.updateUser(null, null, listUpload);
    }
  }

  completed(): boolean {
    return this.activity$.completed;
  }

  next() {
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
