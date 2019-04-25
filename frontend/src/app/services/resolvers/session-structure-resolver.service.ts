import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { SessionService } from '../session/session.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Session_StructureResolverService implements Resolve<any> {

  constructor(private http: HttpClient, private sessionService: SessionService) { }

  resolve(route: ActivatedRouteSnapshot, routerstate: RouterStateSnapshot)  {
    return this.sessionService.getSessionStructure();
  }
}
