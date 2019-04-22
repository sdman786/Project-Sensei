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
import { isNullOrUndefined } from 'util';

const jsonBaseSessionUrl = 'http://localhost:8080/session';
const jsonBaseSessionStructureUrl = 'http://localhost:8081/session-structure';
const baseSessionUrl = 'http://localhost:3000/authapi/sessions';
const baseSessionStructureUrl = 'http://localhost:3000/authapi/sessions_structure';

@Injectable({
  providedIn: 'root',
})

export class SessionService {

  public sessionStructure: SessionStructure[];
  public sessions: Session[];
  public activeTask?: Lesson | Activity | Quiz;
  public activeTaskName?: string;
  public activeTaskDescription?: string;

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
    return new Promise((resolve, reject) => {
      this.http.get<any>(baseSessionUrl).subscribe(sessionArray => {
        sessionArray.forEach(session => {
          this.sessions.push(session as Session);
        });
        resolve(this.sessions);
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

      console.log('SessionService: ', result);
      if (result) {
        this.setNextTask(user);
      }
    });
  }


  private setNextTask(user: User) {
    let nextTask = null;
    let nextSession = null;
    this.getSessionStructure().then(sessionStructure => {
      if (sessionStructure) {
        this.sessionStructure.forEach((session, index) => {
          if (session.name === user.session) {
            console.log(session);
            session.tasks.forEach((task, index) => {
              if (task.name === user.task && session.tasks[index + 1]) {
                // if (session.tasks[index]) {
                  nextTask = session.tasks[index + 1].name;
                  console.log(nextTask);
                // }
              }
            });
            if (isNullOrUndefined(nextTask) && session.id !== 3) {
              nextSession = session.id + 1;
            }
          }
          if (nextSession && session.id === nextSession) {
            nextSession = session.name;
            nextTask = session.tasks[0].name;
          }
        });
        if ((nextTask && nextSession) || nextTask) {
          // Update User With The Next Task
          this.userService.updateUser(nextSession, nextTask, null);
          console.log('Update User Return Value');
          this.populateActiveSession(null);
        }
      }
    });
  }
}


