import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { User } from './model/user';
import { Message } from './model/message';


const Url1 = 'http://localhost:8080/api/users';
const Url2 = 'http://localhost:8080/api/allMessages';
const Url3 = 'http://localhost:8080/api/submitMessageFromTo';
const Url4 = 'http://localhost:8080/api/messagesFromTo';
const Url5 = 'http://localhost:8080/api/newUser' ;

@Injectable({ providedIn: 'root'})
export class WebChatService {
  
  constructor ( private http: HttpClient) {}
   
  getUsers() {
     return this.http.get<User[]>(Url1);
     }
  
  getMessages() {
     return this.http.get<Message[]>(Url2);
  }
  
  insertMessage(message) {
     return this.http.post<Message>(Url3, message );
     }
   
   getMessagesFromTo(id1, id2) {
      const params = new HttpParams()
      .set('fromId', id1)
      .set('toId', id2 );
      return this.http.get<Message[]>('http://localhost:8080/api/messagesFromTo',{params});
      
   }

   newUser(user){
      return this.http.post<User>(Url5, user);

   }

   
    

} 
  