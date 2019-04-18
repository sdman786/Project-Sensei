import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, Event, NavigationEnd  } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from './models/user/user';
import { UserService } from './services/user.service';
import { SessionService } from './services/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  userLoggedIn?: boolean;
  showSidebar: boolean;
  hideSidebar = ['/register', '/login'];

  // Dropdown Menu Variables
  isCollapsed = true;
  dropActive = false;
  activeSession = '';
  route = '';

  constructor(public router: Router, private userService: UserService) {
    router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe((navEnd: NavigationEnd) => {
      this.route = navEnd.urlAfterRedirects;
      switch (navEnd.urlAfterRedirects) {
        case '/session-one':
          this.dropActive = true;
          this.activeSession = ': One';
          break;
        case '/session-two':
          this.dropActive = true;
          this.activeSession = ': Two';
          break;
        case '/session-three':
          this.dropActive = true;
          this.activeSession = ': Three';
          break;
        case '/case-study':
          this.dropActive = true;
          this.activeSession = ': Case Study';
          break;
        default:
          this.dropActive = false;
          this.activeSession = '';
          break;
      }
      this.userLoggedIn = this.userService.isLoggedIn();
    });
  }

  @Input() routerLinkActiveOptions: { exact: boolean; };

  ngOnInit(): void {
    // this.userService.createUser();
    // this.sessionService.getSessionStructure();
    // this.sessionService.getAllSessions();
  }

  logout() {
    this.userService.destroyUser();
    // this.userLoggedIn = false;
  }

  login() {
  }

  // public getUser() {
  //   this.auth.profile().subscribe(user => {
  //     this.user = user;
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }
}
