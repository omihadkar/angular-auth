import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import {JwtModule} from '@auth0/angular-jwt';
import { LoginComponent } from './login/login.component'

export function  tokenGetter()
{
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    TodoListComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    JwtModule.forRoot({
      config:{ 
      tokenGetter: tokenGetter,
      whitelistedDomains: ['localhost:4000'],
      blacklistedRoutes: ['localhost:4000/api/auth']}
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
