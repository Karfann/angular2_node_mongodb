import { SignupComponent } from './auth/signup.component';
import { SigninComponent } from './auth/signin.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { routing } from './app.routing';

import { AppComponent } from "./app.component";
import { HeaderComponent } from './header.component';
import { MessageComponent } from './messages/message.component';
import { MessageListComponent } from './messages/message-list.component';
import { MessageInputComponent } from './messages/message-input.component';
import { MessagesComponent } from './messages/messages.component';

import { MessageService } from './messages/message.service';

import { AuthenticationComponent } from './auth/authentication.component';

import { LogoutComponent } from './auth/logout.component';


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
        SignupComponent
    ],
    imports: [
        BrowserModule, 
        FormsModule, 
        routing,
        ReactiveFormsModule
        ],
    providers: [
        MessageService
        ],
    bootstrap: [AppComponent]
})
export class AppModule {

}