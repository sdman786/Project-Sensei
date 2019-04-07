import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { QuizComponent } from './components/session-template/quiz/quiz.component';
import { SessionOneComponent } from './components/session-template/session-one/session-one.component';
import { SessionTwoComponent } from './components/session-template/session-two/session-two.component';
import { SessionThreeComponent } from './components/session-template/session-three/session-three.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { SessionTemplateComponent } from './components/session-template/session-template.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'session-one', component: SessionTemplateComponent, children: [{path: '', component: SessionOneComponent}] },
  { path: 'session-two', component: SessionTemplateComponent, children: [{path: '', component: SessionTwoComponent}] },
  { path: 'session-three', component: SessionTemplateComponent, children: [{path: '', component: SessionThreeComponent}] },
  // children: [
  //   {path: '', redirectTo: 'one', pathMatch: 'full'},
  //   {path: 'one', component: SessionOneComponent},
  //   {path: 'two', component: SessionTwoComponent},
  //   {path: 'three', component: SessionThreeComponent}
  // ] },
  // { path: 'session-one', redirectTo: 'session/one', component: SessionOneComponent },
  // { path: 'session-two', redirectTo: 'session/two', component: SessionTwoComponent },
  // { path: 'session-three', redirectTo: 'session/three', component: SessionThreeComponent },
  { path: 'case-study', component: CaseStudyComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
