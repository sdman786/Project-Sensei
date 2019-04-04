import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AuthGuardService } from './services/auth-guard.service';
import { QuizComponent } from './components/home/quiz/quiz.component';
import { SessionOneComponent } from './components/home/session-one/session-one.component';
import { SessionTwoComponent } from './components/home/session-two/session-two.component';
import { SessionThreeComponent } from './components/home/session-three/session-three.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'quiz', component: QuizComponent },
  { path: 'session-one', component: SessionOneComponent },
  { path: 'session-two', component: SessionTwoComponent },
  { path: 'session-three', component: SessionThreeComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
