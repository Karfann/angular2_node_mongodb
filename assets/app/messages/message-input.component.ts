import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent implements OnInit {

    message: Message;

    constructor(private messageService: MessageService) { }

    onSubmit(f: NgForm) {
        if (this.message) {
            this.message.content = f.value.content;
            this.message = null;
        } else {
            const message = new Message(f.value.content, 'karfann');
            this.messageService
                .addMessage(message)
                .subscribe(
                data => console.log(data),
                error => console.error(error)
                );
        }


        f.resetForm();
    }

    ngOnInit() {
        this.messageService.messageIsEdit.subscribe(
            (message: Message) => this.message = message
        );
    }

    onClear(f: NgForm) {
        f.resetForm();
        this.message = null;
    }
}