import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { getUrlScheme } from '@angular/compiler';
import { SessionOneComponent } from './session-one/session-one.component';
import { MatDialogModule, MatDialog } from '@angular/material';
import * as typeformEmbed from '@typeform/embed'
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-session-template',
  templateUrl: './session-template.component.html',
  styleUrls: ['./session-template.component.scss']
})

export class SessionTemplateComponent implements OnInit {

  constructor(public dialog: MatDialog, private quizService: QuizService) { }
  SessionOne = new SessionOneComponent(null, this.dialog, this.quizService);

  openTask = function openTask(taskType: string, taskName: string) {
    if (taskType === 'quiz') {
      this.SessionOne.openQuiz(taskName);
    } else
    if (taskType === 'lesson') {
      this.SessionOne.openLesson(taskName);
    }
  };

  ngOnInit(): void { }

}
