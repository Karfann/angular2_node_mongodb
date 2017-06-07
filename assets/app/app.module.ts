import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

//ROUTING
import { routing } from './app.routing';

//MODULE
import { MessageModule } from './messages/message.module';

// COMPONENTS
import { AppComponent } from "./app.component";
import { AuthenticationComponent } from './auth/authentication.component';
import { ErrorComponent } from './errors/error.component';
import { HeaderComponent } from './header.component';


// SERVICES
import { AuthService } from './auth/auth.service';
import { ErrorService } from './errors/error.service';
import { MessageService } from './messages/message.service';

@NgModule({
    declarations: [
        AppComponent,
        AuthenticationComponent,
        HeaderComponent,
        ErrorComponent
    ],
    imports: [
        BrowserModule,
        routing,
        HttpModule,
        MessageModule
    ],
    providers: [
        MessageService,
        AuthService,
        ErrorService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }