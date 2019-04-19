import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from 'src/app/services/user.service';

const sessionName = 'session-two';

@Component({
  selector: 'app-session-two',
  templateUrl: './session-two.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionTwoComponent implements OnInit {
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
