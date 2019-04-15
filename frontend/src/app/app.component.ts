import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { User } from './models/user/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: User;
  showSidebar: boolean;
  hideSidebar = ['/register', '/login'];

  // Dropdown Menu Variables
  isCollapsed = true;
  dropActive = false;
  activeSession = '';
  route = '';

  constructor(public auth: AuthenticationService, public router: Router) { }

  @Input() routerLinkActiveOptions: { exact: boolean; };

  ngOnInit(): void {
    // this.getUser();

    this.router.events
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
      });
  }

  // public getUser() {
  //   this.auth.profile().subscribe(user => {
  //     this.user = user;
  //   }, (err) => {
  //     console.error(err);
  //   });
  // }
}
