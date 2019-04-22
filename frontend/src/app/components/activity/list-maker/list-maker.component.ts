import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { IterableChangeRecord_ } from '@angular/core/src/change_detection/differs/default_iterable_differ';
import { ActivityComponent } from '../activity.component';

export class ListItem {
  id: number;
  title = '';
  description = '';
  estimate?: number;
  priority?: 1 | 2 | 3 | 4 | 5;
  complete = false;

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}

@Component({
  selector: 'app-list-maker',
  templateUrl: './list-maker.component.html',
  styleUrls: ['./list-maker.component.scss']
})
export class ListMakerComponent implements OnInit {

  list: ListItem[] = [];
  item: ListItem;
  id = 0;

  example_list: ListItem[] = [];

  constructor(public dialog: MatDialog, private activity: ActivityComponent) {}

  ngOnInit() {
    this.example_list.push(new ListItem({id: 1 , title: 'Create Login & Registration System', description: 'Allows users to register and login'}));
    this.example_list.push(new ListItem({id: 2 , title: 'Create Login & Registration System', description: 'Allows users to register and login'}));
    this.example_list.push(new ListItem({id: 3 , title: 'Create Login & Registration System', description: 'Allows users to register and login'}));
    this.example_list.push(new ListItem({id: 4 , title: 'Create Login & Registration System', description: 'Allows users to register and login'}));
    this.example_list.push(new ListItem({id: 5 , title: 'Create Login & Registration System', description: 'Allows users to register and login'}));
  }

  openDialog(): void {
    const dialogRef = this.dialog.open( NewItemDialog, {
      height: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      if (result) {
        this.list.push(result);
        this.activity.listData.push(result);
      }
    });
  }
  addItem(newItem) {
    this.item = new ListItem(newItem);
    this.list.push(this.item);
  }

  removeItem() {
    this.list = this.list
      .filter(List => List.id !== this.item.id);
  }

  getAllLists(): ListItem[] {
    return this.list;
  }

  getListById(id: number): ListItem {
    return this.list
      .filter(List => List.id === id)
      .pop();
  }

}

@Component({
  selector: 'new-item-dialog',
  styleUrls: ['./list-maker.component.scss'],
  template: `
  <div mat-dialog-content class="center" style="margin: 0 auto; min-height: 315px;">
  <h2 class="mt-4 mb-3">Create a requirement</h2>
  <div class="d-flex flex-column m4">

    <mat-form-field class="item-input-block">
    <input matInput class="item-input-field" type="text" name="title"
      [(ngModel)]="item.title" required>
    <mat-placeholder for="title" class="item-label">Title</mat-placeholder>
    <span class="item-input-icon-clear" *ngIf="item.title" matSuffix mat-icon-button
      (click)="item.title=''">
      <mat-icon>close</mat-icon>
    </span>
  </mat-form-field>

  <mat-form-field class="item-input-block">
  <input matInput class="item-input-field" type="text" name="description"
    [(ngModel)]="item.description" required>
  <mat-placeholder for="description" class="item-label">Description</mat-placeholder>
  <span class="item-input-icon-clear" *ngIf="item.description" matSuffix mat-icon-button
    (click)="item.description=''">
    <mat-icon>close</mat-icon>
  </span>
</mat-form-field>
</div>

</div>

<div mat-dialog-actions class="col-12 d-flex justify-content-center mat-dialog-actions">
  <button mat-button (click)="onNoClick()">Cancel</button>
  <button mat-button [mat-dialog-close]="item" *ngIf="item.title && item.description" cdkFocusInitial>Submit</button>
</div>
`
})
export class NewItemDialog {

  item: ListItem;

  constructor(
    public dialogRef: MatDialogRef<NewItemDialog>) {
      this.item = new ListItem();
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
