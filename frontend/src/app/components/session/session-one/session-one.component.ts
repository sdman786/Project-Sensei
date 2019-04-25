import { Component, OnInit } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { UserService } from 'src/app/services/user/user.service';
import { SessionStructure } from 'src/app/models/session/session-structure';
import { SessionService } from 'src/app/services/session/session.service';

const sessionName = 'session-one';

@Component({
  selector: 'app-session-one',
  templateUrl: './session-one.component.html',
  styleUrls: ['../session.component.scss']
})
export class SessionOneComponent implements OnInit {

  activeSession: boolean;
  sessionStructure$: SessionStructure;
  
  constructor(private userService: UserService, private sessionService: SessionService) { }

  ngOnInit(): void {
    this.activeSession = this.checkActiveSession();
    this.sessionStructure$ = this.sessionService.sessionStructure.filter(this.populateSessionCards)[0];
  }
  
  populateSessionCards(element, index, array) {
    return (element.name === sessionName);
  }
  checkActiveSession(): boolean {
    const activeState = this.userService.getUser().session;
    if (activeState === sessionName) {
      return true;
    } else {
      return false;
    }
  }

}

// @Component({
//   selector: 'lesson-component',
//   template: ''
// })

// export class LessonComponent {
//   constructor() { }

//   ngAfterViewInit(): void {

//     // typeformEmbed.makePopup('https://salman829964.typeform.com/to/FOxG0c', { mode: 'popup', autoOpen: true });

//     // const reference = typeformEmbed.makePopup(
//     //   'https://salman829964.typeform.com/to/FOxG0c',
//     //   {
//     //     mode: 'popup',
//     //     autoClose: 3000,
//     //     hideHeaders: true,
//     //     hideFooters: true,
//     //     onSubmit: function () {
//     //       console.log('Typeform successfully submitted')
//     //     }
//     //   }
//     // )
//     // reference.open();


//   }
// }
