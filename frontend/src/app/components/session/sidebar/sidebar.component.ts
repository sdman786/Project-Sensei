import { Component, OnInit, HostListener } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import { Session } from 'src/app/models/session/session';
import { Quiz } from 'src/app/models/session/quiz';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { Activity } from 'src/app/models/session/activity/activity';
// import { SessionTemplateComponent } from '../session/session.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../session.component.scss'],
})
export class SidebarComponent implements OnInit {

  private sessionOne: Session;
  private sessionTwo: Session;
  private sessionThree: Session;
  private sessionOneId = 1;
  private sessionTwoId = 2;
  private sessionThreeId = 3;
  // private quiz: Quiz[];
  // private lesson: Lesson[];
  // private activity: Activity[];

  activeTask?: Lesson | Activity | Quiz;
  activeTaskName = '';
  activeTaskDescription = '';

  private readonly getSession = this.sessionService.getSession().then(session => {
    switch (session['id']) {
      case this.sessionOneId:
        this.sessionOne = new Session(session);
        this.populateActiveSession(this.sessionOne);
        break;
      case this.sessionTwoId:
        this.sessionTwo = new Session(session);
        this.populateActiveSession(this.sessionTwo);
        break;
      case this.sessionThreeId:
        this.sessionThree = new Session(session);
        this.populateActiveSession(this.sessionThree);
        break;
      default:
        break;
    }
  });

  constructor(private sessionService: SessionService) { }

  ngOnInit(): void {
    this.getSession;
  }

  private populateActiveSession(session: Session) {
    const activeTask = this.sessionService.getActiveTask();
    session.quiz.forEach(quiz => {
      if (quiz.name === activeTask) {
        this.activeTask = quiz;
      }
    });
    session.lesson.forEach(lesson => {
      if (lesson.name === activeTask) {
        this.activeTask = lesson;
      }
    });
    session.activity.forEach(activity => {
      if (activity.name === activeTask) {
        this.activeTask = activity;
      }
    });

    this.activeTaskName = this.activeTask.name;
    this.activeTaskDescription = this.activeTask.description;
  }

  openTask(): void {
    this.sessionService.openTask(this.activeTask);
  }

  // openLesson(lessonName: string): void {
  //   this.sessionService.openLesson(this.lesson, lessonName);
  // }

  // openActivity(activityName: string): void {
  //   this.sessionService.openActivity(this.activity, activityName);
  // }

}
