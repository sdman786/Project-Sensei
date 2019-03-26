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
import { MainComponent, SessionOne } from './components/main/main.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SessionOneComponent } from './components/main/session-one/session-one.component';



@NgModule({
    entryComponents: [
      MainComponent,
    SessionOne],
  declarations: [
    AppComponent,
    MainComponent,
    SessionOne,
    RegisterComponent,
    LoginComponent,
    ProfileComponent,
    SessionOneComponent
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
