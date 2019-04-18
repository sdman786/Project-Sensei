import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Session } from 'src/app/models/session/session';
import { Quiz } from 'src/app/models/session/quiz';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { Activity } from 'src/app/models/session/activity/activity';
import { UserService } from 'src/app/services/user.service';
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
  activeTask?: Lesson | Activity | Quiz;

  constructor(private route: ActivatedRoute, private sessionService: SessionService, private userService: UserService) {
    // this.route.data

  }

  ngOnInit(): void {
    if (this.route.snapshot.data) {
      // this.route.snapshot.data.resData.forEach(session => {
      //   this.populateActiveSession(session);
      // });
      this.route.snapshot.data.session.forEach(session => {
        this.populateActiveSession(session);
      });
    }

    // this.route.data.subscribe((res) => {
    //   console.log(res);
    // });

    // this.sessionService.getSessionStructure();
    // this.getSessions();
  }

  getSessions() {
  //   this.sessionService.getSession().then(session => {
  //     switch (session['id']) {
  //       case this.sessionOneId:
  //         this.sessionOne = new Session(session);
  //         this.activeSession = session['name'];
  //         this.populateActiveSession(this.sessionOne);
  //         break;
  //       case this.sessionTwoId:
  //         this.sessionTwo = new Session(session);
  //         this.activeSession = session['name'];
  //         this.populateActiveSession(this.sessionTwo);
  //         break;
  //       case this.sessionThreeId:
  //         this.sessionThree = new Session(session);
  //         this.activeSession = session['name'];
  //         this.populateActiveSession(this.sessionThree);
  //         break;
  //       default:
  //         break;
  //     }
  //   });
  // }
  }

  private populateActiveSession(session: Session) {
    const activeTask = this.userService.getActiveTask();
    session.quiz.forEach(quiz => {
      if (quiz.name === activeTask) {
        this.activeTask = new Quiz(quiz);
        console.log(this.activeTask instanceof Quiz);
        console.log(quiz instanceof Quiz);

      }
    });
    session.lesson.forEach(lesson => {
      if (lesson.name === activeTask) {
        this.activeTask = new Lesson(lesson);
        console.log(this.activeTask instanceof Lesson);
        console.log(lesson instanceof Lesson);

      }
    });
    session.activity.forEach(activity => {
      if (activity.name === activeTask) {
        this.activeTask = new Activity(activity);
        console.log(this.activeTask instanceof Activity);
        console.log(this.activeTask);

      }
    });
    console.log(session);
  }

  getActiveSession() {
    return this.activeSession;
  }

  openTask(): void {
    this.sessionService.openTask(this.activeTask);
  }

  nextSession() {
    console.log('Next Session');
  }

  nextTask() {
    // this.sessionOne.
  }

}
