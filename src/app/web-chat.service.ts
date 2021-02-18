import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from './model/user';

const Url1 = 'http://localhost:8080/api/users';

@Injectable({ providedIn: 'root'})
export class WebChatService {
  
  prova : User[];
  
  constructor ( private http: HttpClient) {}
    getUsers() {
     return this.http.get<User[]>(Url1);
     
    } 
  }
  