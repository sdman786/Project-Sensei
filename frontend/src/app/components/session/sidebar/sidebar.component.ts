import { Component, OnInit, HostListener, Pipe, PipeTransform } from '@angular/core';
import { SessionService } from 'src/app/services/session/session.service';
import { ActivatedRoute } from '@angular/router';

@Pipe({ name: 'transform' })
export class StringTransformer implements PipeTransform {
  transform(name: string): string {
    name = name.replace(/-/g, ' ');
    return name;
  }
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['../session.component.scss'],
})
export class SidebarComponent implements OnInit {

  private activeSession?: string;
  activeTaskName: string = this.sessionService.activeTaskName;
  activeTaskDescription: string = this.sessionService.activeTaskDescription;

  constructor(private route: ActivatedRoute, private sessionService: SessionService) { }

  ngOnInit(): void {
    if (this.route.snapshot.data) {
      this.route.snapshot.data.session.forEach(session => {
        this.sessionService.populateActiveSession(session);
        this.activeTaskName = this.sessionService.activeTaskName;
        this.activeTaskDescription = this.sessionService.activeTaskDescription;

      });
    }
  }
  openTask(): void {
    this.sessionService.openTask( );
  }

}
