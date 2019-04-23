import { Component, OnInit, Inject } from '@angular/core';
import { Activity } from 'src/app/models/session/activity/activity';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ListItem } from './list-maker/list-maker.component';
import { UserService } from 'src/app/services/user/user.service';
import { Upload } from 'src/app/models/upload';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.scss']
})
export class ActivityComponent implements OnInit {

  activity$: Activity;
  activityType$: string;
  listData: ListItem[];

  constructor(public dialogRef: MatDialogRef<ActivityComponent>, @Inject(MAT_DIALOG_DATA) public data: Activity,
              private userService: UserService) {
    this.activity$ = this.data.selectedTask as Activity;
    if (this.activity$.content) {
      this.activityType$ = 'content';
    }
    if (this.activity$.type === 'listMaker') {
      this.listData = [];
    }
  }

  ngOnInit() {
    this.activity$.completed = false;
   }

  getActivity() {
    // return this.activity$.type === 'listMaker' ? true : false;
  }

  completed(): boolean {
    return this.activity$.completed;
  }

  next() {
    this.activityType$ = 'listMaker';
  }

  previous() {
    this.activityType$ = 'content';
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.activity$.completed = true;
    if (this.listData && this.listData.length >= 5) {
      this.activity$.upload = new Upload(this.activity$.name, JSON.stringify(this.listData));
      this.userService.updateUser(this.activity$);
    }
  }

  onExit() {
    this.activity$.completed = false;
    this.listData = [];
    this.dialogRef.close();
  }
}


@Component({
  selector: 'app-content',
  styleUrls: ['./activity.component.scss'],
  template: `
  <div mat-dialog-content class="h-100" style="margin: 0 auto;padding: 0;">
    <mat-card class="session-card-content mat-card">
      <mat-card-content>
        <h2>{{ activityContent$ }}</h2>
      </mat-card-content>
    </mat-card>
  </div>
  `
})
export class ActivityContent implements OnInit {

  activityContent$?: string;

  constructor( private activity: ActivityComponent) {}

  ngOnInit(): void {
    this.activityContent$ = this.activity.activity$.content;
  }
}
