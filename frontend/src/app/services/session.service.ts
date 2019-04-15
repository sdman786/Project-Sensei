import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Session } from '../models/session/session';
import { Quiz } from '../models/session/quiz';
import { Lesson } from '../models/session/lesson/lesson';
import { Activity } from '../models/session/activity/activity';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  baseSessionUrl = 'http://localhost:8080/session';
  private sessionOne = 1;
  private sessionTwo = 2;
  private sessionThree = 3;
  private quiz: Quiz[];
  private lesson: Lesson[];
  private activity: Activity[];

  constructor(private http: HttpClient) { }

  get_Session(sessionID: number) {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseSessionUrl).subscribe(res => {
        res.forEach(session => {
          if (session.id === sessionID) {
            resolve(session);
          }
        });
      });
    });
  }

  getSession() {
    return new Promise((resolve, reject) => {
      this.http.get<any>(this.baseSessionUrl).subscribe(res => {
        resolve(res.forEach(session => {
          session = new Session(session);
          session['quiz'].forEach(q => {
            this.quiz.push(q);
          });
          session['lesson'].forEach(l => {
            this.lesson.push(l);
          });
          session['activity'].forEach(a => {
            this.activity.push(a);
          });
        })
        );
      });
    });
  }

  // this.sessionService.get_Session().then(session => {
  //   session.id === 1 ? session = new Session(session) : null;
  //   session.quiz.forEach(q => {
  //   this.quiz.push(q);
  //   });
  //   session.lesson.forEach(l => {
  //     this.lesson.push(l);
  //   });
  //   session.activity.forEach(a => {
  //     this.activity.push(a);
  //   });
  // });

}
