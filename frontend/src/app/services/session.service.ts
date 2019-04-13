import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  baseQuizUrl: string = "http://localhost:8080/";
  baseLessonUrl: string = "http://localhost:8081/";
  baseActivityUrl: string = "http://localhost:8082/";
  baseSessionUrl: string = "http://localhost:8083/";

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

  get_Session(sessionName: string) {
    return this.http.get(this.baseSessionUrl + sessionName);
  }

}
