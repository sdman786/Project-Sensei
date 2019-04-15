import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { SessionOneComponent } from './components/session/session-one/session-one.component';
// import { SessionTemplateComponent } from './components/session/session.component';
import { SessionThreeComponent } from './components/session/session-three/session-three.component';
import { SessionTwoComponent } from './components/session/session-two/session-two.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent , canActivate: [AuthGuardService] },
  { path: 'session-one', component: SessionOneComponent, canActivate: [AuthGuardService] },
  { path: 'session-two', component: SessionTwoComponent, canActivate: [AuthGuardService] },
  { path: 'session-three', component: SessionThreeComponent, canActivate: [AuthGuardService] },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
