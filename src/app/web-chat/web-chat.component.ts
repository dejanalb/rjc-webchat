import { getLocaleDateTimeFormat, getLocaleTimeFormat } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Message } from '../model/message';
import { User } from '../model/user';
import { WebChatService } from '../web-chat.service';


@Component({
  selector: 'app-web-chat',
  templateUrl: './web-chat.component.html',
  styleUrls: ['./web-chat.component.css']
})
export class WebChatComponent implements OnInit {

  public users: User[];
  public chatMessages: Message[] = [];

  public inputmessage: string;


  constructor(private service: WebChatService, private router: Router) { }

  public submit() { // post per inserimento messaggio su db (insertMessage) e refresh lista messaggi (getMessages)
    let sendtime = new Date();
    let row: Message = { idMitt: 30, idDest: 31, text: this.inputmessage, dateTime: sendtime };
    this.service.insertMessage(row).subscribe((data: any) => { this.service.getMessages().subscribe(result => this.chatMessages = result); } );

  }

  ngOnInit(): void {
    //  this.router.navigate(['login']);

    this.service.getUsers().subscribe(result => this.users = result);
    this.service.getMessages().subscribe(result => this.chatMessages = result);



  }

}
