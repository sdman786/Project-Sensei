import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from 'src/app/services/user/user.service';
import { SessionStructure } from 'src/app/models/session/session-structure';
import { SessionService } from 'src/app/services/session/session.service';

const sessionName = 'session-three';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionThreeComponent implements OnInit {
  
  activeSession: boolean;
  sessionStructure$: SessionStructure;
  
  constructor(private userService: UserService, private sessionService: SessionService) {
  }

  ngOnInit(): void {
    this.activeSession = this.checkActiveSession();
    this.sessionStructure$ = this.sessionService.sessionStructure.filter(this.populateSessionCards)[0];
  }
  
  populateSessionCards(element, index, array) {
    return (element.name === sessionName);
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
