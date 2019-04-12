import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { getUrlScheme } from '@angular/compiler';
import { SessionOneComponent } from './session-one/session-one.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import * as typeformEmbed from '@typeform/embed';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-session-template',
  templateUrl: './session-template.component.html',
  styleUrls: ['./session-template.component.scss']
})

export class SessionTemplateComponent implements OnInit {

  constructor(public dialog: MatDialog, private sessionService: SessionService) { }
  SessionOne = new SessionOneComponent(null, this.dialog, this.sessionService);

  openTask = function openTask(taskType: 'quiz' | 'lesson', taskName: string) {
    if (taskType === 'quiz' && taskName) {
      this.SessionOne.openQuiz(taskName);
    } else
    if (taskType === 'lesson' && taskName) {
      this.SessionOne.openLesson(taskName);
    }
  };

  ngOnInit(): void { }

}
