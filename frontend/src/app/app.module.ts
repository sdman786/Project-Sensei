import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatCardModule
  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent  } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizComponent } from './components/home/quiz/quiz.component';
import { SessionOneComponent } from './components/home/session-one/session-one.component';
import { SessionTwoComponent } from './components/home/session-two/session-two.component';
import { SessionThreeComponent } from './components/home/session-three/session-three.component';



@NgModule({
    entryComponents: [
      HomeComponent],
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    QuizComponent,
    SessionOneComponent,
    SessionTwoComponent,
    SessionThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
