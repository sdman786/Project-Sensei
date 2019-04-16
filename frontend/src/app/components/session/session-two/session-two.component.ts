import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-session-two',
  templateUrl: './session-two.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionTwoComponent implements OnInit {

  activeSession?: string;
  constructor() {
  }

  ngOnInit(): void {
    // this.activeSession = this.sideBar.activeSession;
  }

}

  // openQuiz(quizName: string): void {
  //   this.sessionService.openQuiz(this.quiz, quizName);
  // }

  // openLesson(lessonName: string): void {
  //   this.sessionService.openLesson(this.lesson, lessonName);
  // }

  // openActivity(activityName: string): void {
  //   this.sessionService.openActivity(this.activity, activityName);
  // }
// }
