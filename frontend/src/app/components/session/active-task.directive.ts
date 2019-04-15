import { Directive, OnInit, ElementRef, Input } from '@angular/core';
import { User } from 'src/app/models/user/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NgControl } from '@angular/forms';
import { Session } from 'src/app/models/session/session';
import { SessionService } from 'src/app/services/session.service';

@Directive({
  selector: '[activeTask]'
})
export class ActiveTaskDirective implements OnInit {

  public user$: User;
  private auth: AuthenticationService;
  sessionService: SessionService;
  session: any[];
  quiz: any;
  lesson: any;
  activity: any;

  @Input() set elementDisabled(disabled: boolean) {
    const check = this.checkUserTask() ? 'disable' : 'enable';
    this.ngControl.control[check]();
  }

  constructor(private ngControl: NgControl) {  }

  ngOnInit(): void {
    this.auth.profile().subscribe(user => {
      this.user$ = user;
    });

    this.sessionService.getSession().then( res => {
      this.session.push(res);
    }
    );
  }

    public checkUserTask(): boolean {
      let value: boolean;
      this.session.forEach(session => {
          if (this.user$.session === session.name) {
            session.quiz.forEach(quiz => {
              this.user$.task === quiz.name ?
              value = true : value = false;
            });
            session.lesson.forEach(lesson => {
              this.user$.task === lesson.name ?
              value = true : value = false;
            });
            session.activity.forEach(activity => {
              this.user$.task === activity.name ?
              value = true : value = false;
            });
          }
      });
      return value;
    }
}
