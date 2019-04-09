import { Component, OnInit } from '@angular/core';
import { SessionOneComponent } from '../session-one/session-one.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../session-template.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private sessionOne : SessionOneComponent) { }

  ngOnInit() {

  }

  openQuiz(quizType: string) { 
    this.sessionOne.openQuiz(quizType);
  }

}
