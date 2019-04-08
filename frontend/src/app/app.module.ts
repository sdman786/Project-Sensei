import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatDividerModule,
  MatDialogModule,
  MatCardModule,
  MatButtonModule
  } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollapseModule,BsDropdownModule, TabsModule } from 'ngx-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent  } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { QuizComponent } from './components/session-template/quiz/quiz.component';
import { SessionOneComponent } from './components/session-template/session-one/session-one.component';
import { SessionTwoComponent } from './components/session-template/session-two/session-two.component';
import { SessionThreeComponent } from './components/session-template/session-three/session-three.component';
import { CaseStudyComponent } from './components/case-study/case-study.component';
import { SessionTemplateComponent } from './components/session-template/session-template.component';
import { SidebarComponent } from './components/session-template/sidebar/sidebar.component';



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
    SessionThreeComponent,
    CaseStudyComponent,
    SessionTemplateComponent,
    SidebarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    TabsModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
