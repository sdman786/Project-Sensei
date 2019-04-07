import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SessionOneComponent implements OnInit, OnChanges {

  show : boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadSession();
  }

  ngOnChanges(): void {
    this.loadSession();
  }

  loadSession() {
    // this.router.events
    // .pipe(
    //   filter(e => e instanceof NavigationEnd)
    //   )
    // .subscribe((navEnd: NavigationEnd) => {
    //   console.log(navEnd.urlAfterRedirects);
    //   if (navEnd.urlAfterRedirects === '/session/one') {
    //     this.show = true;
    //   }
    //   else {
    //     this.show = false;
    //   }
    // });
  }

  openQuiz( quizType: string) {
    this.router.navigateByUrl('/quiz', { state: { mcqName: quizType } });
  }


}
