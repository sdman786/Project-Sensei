import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { getUrlScheme } from '@angular/compiler';
import { SessionOneComponent } from './session-one/session-one.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import * as typeformEmbed from '@typeform/embed'

@Component({
  selector: 'app-session-template',
  templateUrl: './session-template.component.html',
  styleUrls: ['./session-template.component.scss']
})

export class SessionTemplateComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  SessionOne = new SessionOneComponent(null, this.dialog);

  quizType = function openQuiz(quizType: string) {
    this.SessionOne.openQuiz(quizType);
  };

  

  ngOnInit(): void { }

}
