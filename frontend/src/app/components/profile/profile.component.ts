import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Upload } from 'src/app/models/upload';
import { concat } from 'rxjs/operators';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user$: User;

  uploadName$: string[];
  uploadData$: any[];
  upload$: any[];

  constructor(private auth: AuthenticationService, private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.uploadName$ = [];
    this.uploadData$ = [];
    this.upload$ = [];
    this.user$.upload.forEach(upload => {
      
      this.uploadName$.push(upload.name);
      let parseData = JSON.parse(upload.data);
      parseData.forEach(data => {
        this.uploadData$.push(data);
      });
      this.upload$.push({ name: upload.name, data: JSON.parse(upload.data)});
    });
    // this.upload$.concat(this.uploadName$, this.uploadData$);
  }
}
