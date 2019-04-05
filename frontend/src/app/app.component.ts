import { Component, Input, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {
  showSidebar: boolean;
  hideSidebar = ['/register', '/login'];

  constructor(public auth: AuthenticationService, public router: Router) {}

  @Input() routerLinkActiveOptions: { exact: boolean; };

  isCollapsed = true;
  
  activateSidebar(){
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe( (navEnd: NavigationEnd) => {
      console.log(navEnd.urlAfterRedirects);
      this.hideSidebar.forEach(element => {
        if (navEnd.urlAfterRedirects === element) {
          this.showSidebar = false;
        } else {
          this.showSidebar = true;
        }
      });
    });
  }

}
