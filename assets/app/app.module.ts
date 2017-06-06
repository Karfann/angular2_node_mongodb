import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

//ROUTING
import { routing } from './app.routing';

// COMPONENTS

import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { ErrorComponent } from './errors/error.component';
import { HeaderComponent } from './header.component';
import { LogoutComponent } from './auth/logout.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';
import { SigninComponent } from './auth/signin.component';
import { SignupComponent } from './auth/signup.component';

// SERVICES
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';
import { MessageService } from './messages/message.service';

@NgModule({
    declarations: [
        AppComponent,
        MessageComponent,
        MessageListComponent,
        MessageInputComponent,
        MessagesComponent,
        AuthenticationComponent,
        HeaderComponent,
        LogoutComponent,
        SigninComponent,
        SignupComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [
        MessageService,
        AuthService,
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }