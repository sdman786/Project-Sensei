import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class SessionService {

  baseSessionUrl = 'http://localhost:8080/session';

  constructor(private http: HttpClient) { }

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
