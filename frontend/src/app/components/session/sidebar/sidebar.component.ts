import { Component, OnInit, HostListener } from '@angular/core';
import { SessionOneComponent } from '../session-one/session-one.component';
import { SessionTwoComponent } from '../session-two/session-two.component';
// import { SessionTemplateComponent } from '../session/session.component';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../session.component.scss'],
})
export class SidebarComponent {

  taskName: string;

  constructor(
    //  private sessionTemplate: SessionTemplateComponent
     ) { }

  openTask(taskType, taskName) {
    // this.sessionTemplate.openTask(taskType, taskName);
   }

}
