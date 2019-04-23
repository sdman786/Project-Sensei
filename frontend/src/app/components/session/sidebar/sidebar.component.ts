import { Component, OnInit, HostListener, Pipe, PipeTransform } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UserService } from 'src/app/services/user/user.service';

@Pipe({ name: 'transform' })
export class StringTransformer implements PipeTransform {
  transform(name: string): string {
    if (name) {
      name = name.replace(/-/g, ' ');
    }
    return name;
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../session.component.scss'],
})
export class SidebarComponent implements OnInit {


  activeTaskName: string = this.sessionService.activeTaskName;
  activeTaskDescription: string = this.sessionService.activeTaskDescription;
  currentSessionName: string;
  activeSessionName?: string;
  activeSessionUrl?: string;


  constructor(private route: ActivatedRoute, private router: Router,
              private sessionService: SessionService, private userService: UserService) {
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe((navEnd: NavigationEnd) => {
      switch (navEnd.urlAfterRedirects) {
      case '/session-one':
      this.currentSessionName = 'session-one';
        break;
      case '/session-two':
      this.currentSessionName = 'session-two';
        break;
      case '/session-three':
      this.currentSessionName = 'session-three';
        break;
      default:
        break;
    }
  });
}

  ngOnInit(): void {
    if (this.route.snapshot.data) {
      this.route.snapshot.data.session.forEach(session => {
        this.sessionService.populateActiveSession(session);
        this.activeTaskName = this.sessionService.activeTaskName;
        this.activeTaskDescription = this.sessionService.activeTaskDescription;

      });
    }
    this.activeSessionName = this.userService.getActiveSession();
  }

  openTask(): void {
    this.sessionService.openTask( );
  }

  activeSessionCheck(): boolean {
    return this.activeSessionName === this.currentSessionName ? true : false;
  }

  getActiveSession(): string {
    return this.activeSessionName;
  }

  openNextSession() {
    this.activeSessionUrl = '/' + this.activeSessionName;
    this.router.navigateByUrl(this.activeSessionUrl);
  }

}
