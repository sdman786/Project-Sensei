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

  constructor(public dialog: MatDialog, private sessionService: SessionService) {
    // this.sessionOne = new SessionOneComponent(null, this.dialog, this.sessionService);
   }

  openTask = function openTask(taskType: 'quiz' | 'lesson' | 'activity', taskName: string) {
    this.sessionService.get_Session().subscribe(res => {
      if (res[0] && taskType && taskName) {
        switch (taskType) {
          case 'quiz':
            const quiz = res[0].quiz.taskName;
            this.SessionOne.openQuiz(quiz, null);
            break;

          case 'lesson':
            const lesson = res[0].lesson.taskName;
            this.SessionOne.openLesson(lesson, null);
            break;

          case 'activity':
            const activity = res[0].activity.taskName;
            this.SessionOne.openActivity(activity, null);
            break;

          default:
            break;
        }
      }
    });
  };


  ngOnInit(): void { }

}
