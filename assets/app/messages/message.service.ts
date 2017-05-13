import { Injectable, EventEmitter } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Message } from './message.model';

@Injectable()
export class MessageService {

    //private messages: Message[] = []
    private url: string = 'http://localhost:3000/message';
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http) { }

    addMessage(message: Message) {
        //this.messages.push(message);
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        return this.http.post(this.url, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));


    }

    getMessages() {

        return this.http.get(this.url)
            .map((response: Response) => {

                let transfMessages: Message[] = [];
                const messages = response.json().obj;

                for (let message of messages) {
                    transfMessages.push(new Message(
                        message.content,
                        'Dummy',
                        message.id,
                        null
                    ));
                }
                return transfMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));


    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        //
    }

    deleteMessage(message: Message) {
        //this.messages.splice(this.messages.indexOf(message), 1);
    }
}