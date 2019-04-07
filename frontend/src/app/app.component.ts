import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService, UserDetails } from './services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  user: UserDetails;
  showSidebar: boolean;
  hideSidebar = ['/register', '/login'];

  // Dropdown Menu Variables
  isCollapsed = true;
  dropActive: boolean = false;
  activeSession: String = '';

  constructor(public auth: AuthenticationService, public router: Router) { }

  @Input() routerLinkActiveOptions: { exact: boolean; };

  ngOnInit(): void {
    this.auth.profile().subscribe(user => {
      this.user = user;
    }, (err) => {
      console.error(err);
    });
    this.router.events
      .pipe(
        filter(e => e instanceof NavigationEnd)
      )
      .subscribe((navEnd: NavigationEnd) => {
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
}
