import { Injectable, EventEmitter } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Message } from './message.model';

@Injectable()
export class MessageService {

    private messages: Message[] = []
    private url: string = 'http://localhost:3000/message';
    messageIsEdit = new EventEmitter<Message>();

    constructor(private http: Http) { }

    addMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.post(this.url + token, body, { headers: headers })
            .map((response: Response) => {
                const result = response.json();
                const message = new Message(result.obj.content, 'Dummy', result.obj._id, null);
                this.messages.push(message);
                return message;
            })
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
                        message._id,
                        null
                    ));
                }
                this.messages = transfMessages;
                return transfMessages;
            })
            .catch((error: Response) => Observable.throw(error.json()));


    }

    editMessage(message: Message) {
        this.messageIsEdit.emit(message);
    }

    updateMessage(message: Message) {
        const body = JSON.stringify(message);
        const headers = new Headers({
            'Content-Type': 'application/json'
        })
        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.patch(this.url + '/' + message.messageId + token, body, { headers: headers })
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }

    deleteMessage(message: Message) {
        this.messages.splice(this.messages.indexOf(message), 1);

        const token = localStorage.getItem('token') 
            ? '?token=' + localStorage.getItem('token')
            : '';

        return this.http.delete(this.url + '/' + message.messageId + token)
            .map((response: Response) => response.json())
            .catch((error: Response) => Observable.throw(error.json()));
    }
}