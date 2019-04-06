import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-session-two',
  templateUrl: './session-two.component.html',
  styleUrls: ['./session-two.component.scss']
})
export class SessionTwoComponent implements OnInit {

  show : boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadSession();
  }

  ngOnChanges(): void {
    this.loadSession();
  }

  loadSession() {
    this.router.events
    .pipe(
      filter(e => e instanceof NavigationEnd)
      )
    .subscribe((navEnd: NavigationEnd) => {
      console.log(navEnd.urlAfterRedirects);
      if (navEnd.urlAfterRedirects === '/session/two') {
        this.show = true;
      }
      else {
        this.show = false;
      }
    });
  }

  openQuiz( quizType: string) {
    this.router.navigateByUrl('/quiz', { state: { mcqName: quizType } });
  }
}
