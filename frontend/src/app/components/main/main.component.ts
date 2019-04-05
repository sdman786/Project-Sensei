import { Component, OnInit } from '@angular/core';
import { MatDialog, MatCardModule } from '@angular/material';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {

   stage$: number;

  constructor(public dialog: MatDialog, card: MatCardModule) { }

  ngOnInit() {
  }
  openDialog() {
    const dialogRef = this.dialog.open(SessionOne);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

@Component({
  selector: 'session-one',
  templateUrl: './session-one.html',
})

export class SessionOne {}
