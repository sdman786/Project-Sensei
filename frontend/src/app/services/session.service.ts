import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  baseQuizUrl = 'http://localhost:8080/';
  baseLessonUrl = 'http://localhost:8081/';
  baseActivityUrl = 'http://localhost:8082/';
  baseSessionUrl = 'http://localhost:8083/session';

  constructor(private http: HttpClient) { }

  get_Quiz(name: string) {
    return this.http.get(this.baseQuizUrl + name);
  }

  get_Lesson(name: string) {
    return this.http.get(this.baseLessonUrl + name);
  }

  get_Activity(name: string) {
    return this.http.get(this.baseActivityUrl + name);
  }

  get_Session() {
    return this.http.get<any>(this.baseSessionUrl);
  }

  getSession(sessionID: number) {
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

}
