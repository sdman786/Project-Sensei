import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['./session-one.component.scss']
})
export class SessionOneComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  openQuiz( quizType: string) {
    this.router.navigateByUrl('/quiz', { state: { mcqName: quizType } });
  }
}
