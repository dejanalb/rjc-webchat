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

  public users: User[]; //Array di User , di nome users
  public chatMessages: Message[] = []; //Array di Message, di nome chatMessages   

  public inputmessage: string;  
  public idSessionMitt: number; 
  public idSessionDest: number;


  constructor(private service: WebChatService, private router: Router) { }

  public submit() { // chiamo il servizio per fare la post di un nuovo messaggio inviato, contestualmente faccio il refresh dei messaggi tra i due utenti interessati
    let sendtime = new Date();
    let newMessage: Message = { idMitt: this.idSessionMitt, idDest: this.idSessionDest, text: this.inputmessage, dateTime: sendtime };
    this.service.insertMessage(newMessage).subscribe((data: any) => { this.service.getMessagesFromTo(this.idSessionMitt,this.idSessionDest).subscribe(result => this.chatMessages = result); } );
  }
  
   public onChange(e) { // mi imposto l'id del Mittente su una variabile globale per evitare di fare il login
    this.idSessionMitt = e.value ;
    console.log(e);
   }

  public onChange2(e){ // mi imposto l'id del destinatario su una variabile globale e contestualmente faccio il refresh dei messaggi tra mittente (selezionato in precedenza) e destinatario
     this.idSessionDest = e ;
    console.log(e);
    this.service.getMessagesFromTo(this.idSessionMitt,this.idSessionDest).subscribe(result => this.chatMessages = result);
  }
  public newUser(){ // faccio il ruouting per andare alla pagina di registrazione di un nuovo utente
    this.router.navigate(['register']);
  }
  
  ngOnInit(): void {
    //  this.router.navigate(['login']);
     this.service.getUsers().subscribe(result => this.users = result); //all'apertura chiedo la lista degli utenti 
    //this.service.getMessages().subscribe(result => this.chatMessages = result);
  
    }

}
