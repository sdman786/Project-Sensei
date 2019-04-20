import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { SessionStructure } from 'src/app/models/session/session-structure';
import { Session } from 'src/app/models/session/session';
import { UserService } from '../user/user.service';
import { Quiz } from 'src/app/models/session/quiz';
import { Activity } from 'src/app/models/session/activity/activity';
import { Lesson } from 'src/app/models/session/lesson/lesson';
import { QuizComponent } from 'src/app/components/quiz/quiz.component';
import { ActivityComponent } from 'src/app/components/activity/activity.component';
import { LessonComponent } from 'src/app/components/lesson/lesson.component';
import { User } from 'src/app/models/user/user';
import { isUndefined } from 'util';

const jsonBaseSessionUrl = 'http://localhost:8080/session';
const jsonBaseSessionStructureUrl = 'http://localhost:8081/session-structure';
const baseSessionUrl = 'http://localhost:3000/authapi/sessions';
const baseSessionStructureUrl = 'http://localhost:3000/authapi/sessions_structure';

@Injectable({
  providedIn: 'root',
})

export class SessionService {

  // jsonBaseSessionUrl = 'http://localhost:8080/session';
  // jsonBaseSessionStructureUrl = 'http://localhost:8081/session-structure';
  // baseSessionUrl = 'http://localhost:3000/authapi/sessions';
  // baseSessionStructureUrl = 'http://localhost:3000/authapi/sessions_structure';

  // public user$: User;

  public sessionStructure: SessionStructure[];
  public sessions: Session[];
  public activeTask?: Lesson | Activity | Quiz;
  public activeTaskName?: string;
  public activeTaskDescription?: string;

  private sessionOne: Session;
  private sessionTwo: Session;
  private sessionThree: Session;
  private sessionOneId = 1;
  private sessionTwoId = 2;
  private sessionThreeId = 3;

  constructor(private http: HttpClient, public dialog: MatDialog, private userService: UserService) {
    this.sessionStructure = [];
    this.sessions = [];
  }

  getSessionStructure() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(baseSessionStructureUrl).subscribe(structureArray => {
        structureArray.forEach(session => {
          this.sessionStructure.push(session);
        });
        resolve(this.sessionStructure);
      });
    });
  }

  getAllSessions() {
    // this.http.get<any>(this.baseSessionUrl);
    return new Promise((resolve, reject) => {
      this.http.get<any>(baseSessionUrl).subscribe(sessionArray => {
        // while (!this.user$ || !this.user$.username) {
        //   this.user$ = this.userService.getUser() as User;
        // }
        sessionArray.forEach(session => {
          this.sessions.push(session as Session);
          // if (session.name === this.user$.session) {
          // resolve(this.sessions);
          //   session
          // }
        });
        resolve(this.sessions);
        // return this.sessions;
      });
    });
  }

  getSession() {
    return this.sessions;
  }


  populateActiveSession(session: Session) {
    const activeSession = this.userService.getActiveSession();
    const activeTask = this.userService.getActiveTask();

    this.sessions.forEach(session => {
      if (session.name === activeSession) {
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
      }
    });
    this.activeTaskName = this.activeTask.name;
    this.activeTaskDescription = this.activeTask.description;

    console.log(session);
  }

  openTask(): void {
    let component;
    const selectedTask = this.activeTask;
    if (selectedTask instanceof Quiz) {
      component = QuizComponent;
    }
    if (selectedTask instanceof Activity) {
      component = ActivityComponent;
    }
    if (selectedTask instanceof Lesson) {
      component = LessonComponent;
    }
    const dialogRef = this.dialog.open(component, {
      disableClose: true,
      data: { selectedTask }
    });

    dialogRef.afterClosed().subscribe(result => {
      let user = this.userService.getUser() as User;
      let nextTask = null;
      let nextSession = null;

      console.log('SessionService: ', result);
      if (result) {
        this.setNextTask(result, user, nextTask, nextSession);
      }
      // this.sideBar.closeTask(result);
      // this.user$.tasks;
    });
  }


  private setNextTask(result: any, user: User, nextTask: any, nextSession: any) {
    this.getSessionStructure().then(sessionStructure => {
      if (sessionStructure) {
        this.sessionStructure.forEach((session, index) => {
          if (session.name === user.session) {
            console.log(session);
            session.tasks.forEach((task, index) => {
              if (task.name === user.task) {
                session.tasks.splice(index, 1);
                console.log('spliced:', session);
                if (session.tasks[index]) {
                  nextTask = session.tasks[index].name;
                  console.log(nextTask);
                }
              }
            });
            if (!session.tasks[0] && session[index + 1]) {
              nextSession = session[index + 1].name;
              nextTask = session[index + 1].task[0];
            }
          }
        });
        if ((nextTask && nextSession) || nextTask) {
          // Update User With The Next Task
          let bool: boolean = this.userService.updateUser(nextSession, nextTask);
          console.log('Update User Return Value', bool);
          this.populateActiveSession(null);
          // this.userService.updateUser(nextSession, nextTask) ?
          //   console.log('Open Success Next Lesson')
          //   :
          //   console.log('Open Failed Next Lesson');
        }
      }
    });
  }
}


