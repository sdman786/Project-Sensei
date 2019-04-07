import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-session-three',
  templateUrl: './session-three.component.html',
  styleUrls: ['./session-three.component.scss']
})
export class SessionThreeComponent implements OnInit {

  show : boolean = true;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.loadSession();
  }

  loadSession() {
    // this.router.events
    // .pipe(
    //   filter(e => e instanceof NavigationEnd)
    //   )
    // .subscribe((navEnd: NavigationEnd) => {
    //   console.log(navEnd.urlAfterRedirects);
    //   if (navEnd.urlAfterRedirects === '/session/three') {
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
