import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class QuizService {
  baseUrl:string = "http://localhost:8080";
  
  constructor(private http: HttpClient) { }

  get_MCQ(quizName: string) {
    return this.http.get(`http://localhost:8080/${quizName}`);
  }
}