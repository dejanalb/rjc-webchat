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
  public chatMessages: Message[] =[];
  
  public inputmessage: string;


  constructor(private service: WebChatService, private router: Router) { }

  public submit() {
    let sendtime = new Date();
    let row: Message = { text: this.inputmessage , dateTime: sendtime };
    this.chatMessages.push(row);
  }
  public sendToDb() { } //da associare al submit : funzione che permetterà di fare una POST per inserire i messaggi nel DB

  public getMessages() { } //al click su un utente andrò a richiedere tutti i messaggi salvati sul DB 
  
  
  ngOnInit(): void {
  //  this.router.navigate(['login']);

  this.service.getUsers().subscribe(result => this.users = result);
  

   
  }

}
