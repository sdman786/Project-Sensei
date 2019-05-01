import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import { User } from 'src/app/models/user/user';
import { UserService } from 'src/app/services/user/user.service';
import { Upload } from 'src/app/models/upload';
import { concat } from 'rxjs/operators';
import { Results } from 'src/app/models/results';

@Component({
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  user$: User;

  upload$: any[];
  results$: any[];

  constructor(private auth: AuthenticationService, private userService: UserService) {}

  ngOnInit() {
    this.user$ = this.userService.getUser();
    this.upload$ = [];
    this.user$.upload.forEach(upload => {
      upload = upload as Upload;
      this.upload$.push({ name: upload.name, data: JSON.parse(upload.data)});
    });
    this.results$ = [];
    this.user$.results.forEach(result => {
      result = result as Results;
      this.results$.push({ name: result.quiz_name, data: result.result });
    });
    // this.upload$.concat(this.uploadName$, this.uploadData$);
  }
}
