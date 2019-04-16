import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionThreeComponent implements OnInit {

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
