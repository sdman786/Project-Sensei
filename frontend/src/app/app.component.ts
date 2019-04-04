import { Component, Input } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent {

  constructor(public auth: AuthenticationService) {}
  @Input()
routerLinkActiveOptions: {
    exact: boolean;
}

@Input()
routerLinkActive: string | string[];
isActive : boolean = !this.isActive;
}
