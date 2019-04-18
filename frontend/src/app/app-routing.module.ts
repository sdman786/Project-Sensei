import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { SessionOneComponent } from './components/session/session-one/session-one.component';
import { SessionThreeComponent } from './components/session/session-three/session-three.component';
import { SessionTwoComponent } from './components/session/session-two/session-two.component';
import { AuthGuardService } from './services/auth-guard.service';
import { SessionResolverService } from './services/resolvers/session-resolver.service';
import { UserResolverService } from './services/resolvers/user-resolver.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'session-one', component: SessionOneComponent, canActivate: [AuthGuardService],
      resolve: { session: SessionResolverService, user: UserResolverService } },
  { path: 'session-two', component: SessionTwoComponent, canActivate: [AuthGuardService],
      resolve: { session: SessionResolverService, user: UserResolverService }  },
  { path: 'session-three', component: SessionThreeComponent, canActivate: [AuthGuardService],
      resolve: { session: SessionResolverService, user: UserResolverService }  },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService],
      resolve: { session: SessionResolverService, user: UserResolverService }  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
