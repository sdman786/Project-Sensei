import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { Session } from 'src/app/models/session/session';
import { Quiz } from 'src/app/models/session/quiz';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { Activity } from 'src/app/models/session/activity/activity';
import { UserService } from 'src/app/services/user/user.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../session.component.scss'],
})
export class SidebarComponent implements OnInit {

  // private sessionOne: Session;
  // private sessionTwo: Session;
  // private sessionThree: Session;
  // private sessionOneId = 1;
  // private sessionTwoId = 2;
  // private sessionThreeId = 3;

  private activeSession?: string;
  activeTaskName: string = this.sessionService.activeTaskName;
  activeTaskDescription: string = this.sessionService.activeTaskDescription;

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private userService: UserService) {
    // this.route.data

  }

  ngOnInit(): void {
    if (this.route.snapshot.data) {
      this.route.snapshot.data.session.forEach(session => {
        this.sessionService.populateActiveSession(session);
        this.activeTaskName = this.sessionService.activeTaskName;
        this.activeTaskDescription = this.sessionService.activeTaskDescription;

      });
    }
  }

  getSessions() {
  }


  getActiveSession() {
    return this.activeSession;
  }

  openTask(): void {
    this.sessionService.openTask( );
  }

  nextSession() {
    console.log('Next Session');
  }

  refreshComponents() {
    // this.sessionOne.
  }

}
