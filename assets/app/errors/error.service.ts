import { Injectable, EventEmitter } from '@angular/core';

import { Error } from './error.model';

@Injectable()
export class ErrorService {

    errorOccurred = new EventEmitter<Error>();
    
    handleError(err: any){
        const errorData = new Error(err.title, err.error.message);
        this.errorOccurred.emit(errorData);
    }
}