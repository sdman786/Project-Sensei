import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../user/user.service';

@Injectable()
export class UserResolverService implements Resolve<any> {

  constructor(private http: HttpClient, private userService: UserService) { }

  resolve(route: ActivatedRouteSnapshot, routerstate: RouterStateSnapshot)  {
    return this.userService.createUser();
  }
}
