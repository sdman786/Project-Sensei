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

  openTask = function openTask(taskType: 'quiz' | 'lesson' | 'activity', taskName: string) {

    if (taskType === 'quiz' && taskName) {
      this.sessionService.get_Session().subscribe(res => {
        if (res[0]) {
          const quiz = res[0].quiz.taskName;
          this.SessionOne.openQuiz(quiz, null);
        }
      }
      );
    }

    if (taskType === 'lesson' && taskName) {
      this.sessionService.get_Session().subscribe(res => {
        if (res[0]) {
          const lesson = res[0].quiz.taskName;
          this.SessionOne.openLesson(lesson, null);
        }
      }
      );
    }

    if (taskType === 'activity' && taskName) {
      this.sessionService.get_Session().subscribe(res => {
        if (res[0]) {
          const activity = res[0].quiz.taskName;
          this.SessionOne.openActivity(activity, null);
        }
      }
      );
    }

  };

  ngOnInit(): void { }

}
