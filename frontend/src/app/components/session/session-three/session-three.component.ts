import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from 'src/app/services/user.service';

const sessionName = 'session-three';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionThreeComponent implements OnInit {
  
  activeSession: boolean;
  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
    this.activeSession = this.checkActiveSession();
  }

  checkActiveSession(): boolean {
    const activeState = this.userService.getUser().session;
    if (activeState === sessionName) {
      return true;
    } else {
      return false;
    }
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
