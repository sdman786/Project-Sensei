import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  baseUrl:string = "http://localhost:3000";
  constructor(private http: HttpClient) { }

  get(url: string) {
    return this.http.get(url);
  }

  getAll() {
    return [
      { id: 'data/agile.json', name: 'Agile Quiz' },
      { id: 'data/scrum.json', name: 'Scrum Quiz' }
    ];
  }

  get_AgileQuiz() {
    return this.http.get(this.baseUrl + '/agile');
  }
}
