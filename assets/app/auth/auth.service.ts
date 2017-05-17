import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { User } from './user.model';

@Injectable()
export class AuthService {
    private url: string = 'http://localhost:3000/user';

    constructor(private http: Http) { }

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.post(this.url, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));;
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.post(this.url + '/signin', body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));;
    }
}