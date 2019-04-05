import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'session-template',
  templateUrl: './session-template.component.html',
  styleUrls: ['./session-template.component.scss']
})

export class SessionTemplateComponent implements OnInit {
  
  hideSidebar = ['/session/one', '/session/two', '/session/three'];
  sessionOne : boolean = false;
  sessionTwo : boolean = false;
  sessionThree : boolean = false;
  router : Router;

  constructor( public _router: Router ) {
    this.router = _router;
   }

  ngOnInit(): void {
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
    )
    .subscribe( (navEnd: NavigationEnd) => {
      console.log(navEnd.urlAfterRedirects);
      switch (navEnd.urlAfterRedirects) {
        case '/session/one':
          this.sessionOne = true;
          break;
        case '/session/two':
        this.sessionTwo = true;
          break;
        case '/session/three':
        this.sessionThree = true;
          break;
        default:
        this.sessionOne = false;
        this.sessionOne = false;
        this.sessionOne = false;
          break;
      }
    });  
  }

}
