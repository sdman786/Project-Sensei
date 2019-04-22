import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Internal/Observable';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { User } from '../../models/user/user';
import { SessionService } from '../session/session.service';
import { UserService } from '../user/user.service';

interface TokenResponse {
  token: string;
}

 export class TokenPayload {
    username: string;
    password: string;
  }

@Injectable({
  providedIn: 'root'
})
@Injectable()
export class AuthenticationService {
  private token: string;
  private baseAuthUrl = 'http://localhost:3000/authapi/';

  constructor(private http: HttpClient, private router: Router) {}

  // Token Handler
  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  // User Data from Token
  public getUserToken(): User {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  /**
   * getUserDetails
   */
  public getUserDetails(): any {
    this.profile().subscribe(user => {
      return user;
    });
  }

  // Check if User is logged in or not
  public isLoggedIn(): boolean {
    const user = this.getUserToken();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  // Token Removal when user Logs Out
  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this.router.navigateByUrl('/login');
  }

  // Structuring the API Calls
  private request(method: 'post'|'get', type: 'login'|'register'|'profile'|'update', user?: TokenPayload | User): Observable<any> {

    let base;

    if (method === 'post') {
      base = this.http.post(this.baseAuthUrl + type, user);
    } else {
      base = this.http.get(this.baseAuthUrl + type, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
      map((data: TokenResponse) => {
        if (data.token) {
          this.saveToken(data.token);
        }
        return data;
      })
    );
    return request;
  }

  // Calling the Register and Login API Endpoints
  public register(user: User): Observable<any> {
    return this.request('post', 'register', user);
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<User> {
    return this.request('get', 'profile');
  }

  public update(user: User): Observable<any> {
    return this.request('post', 'update', user);
  }
}
