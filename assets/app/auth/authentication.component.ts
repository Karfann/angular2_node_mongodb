import { Component, OnInit } from '@angular/core';

import { AuthService } from './auth.service';

@Component({
    selector: 'app-authentication',
    templateUrl: 'authentication.component.html'
})

export class AuthenticationComponent implements OnInit {
    
    constructor(
        private authService: AuthService
    ) { }

    ngOnInit() { }

    isLoggedIn(): Boolean {
        return this.authService.isLoggedIn();
    }
}