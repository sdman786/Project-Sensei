import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SessionService {
  baseQuizUrl: string = "http://localhost:8080/";
  baseLessonUrl: string = "http://localhost:8081/";

  constructor(private http: HttpClient) { }

  get_Quiz(name: string) {
    return this.http.get(this.baseQuizUrl + name);
  }

  get_Lesson(name: string) {
    return this.http.get(this.baseLessonUrl + name);
  }

}
