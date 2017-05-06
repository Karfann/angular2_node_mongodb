import { Component } from '@angular/core';
import { NgForm } from "@angular/forms";

import { MessageService } from './message.service';
import { Message } from './message.model';

@Component({
    selector: 'app-message-input',
    templateUrl: './message-input.component.html'
})

export class MessageInputComponent{

    constructor(private messageService: MessageService){}

    onSubmit(f: NgForm){
        const message = new Message(f.value.content,'karfann');
        this.messageService.addMessage(message);
        f.resetForm();
    }
}