import { Component } from '@angular/core';

interface ChatRow {
  text: string;
  date: string;
}
interface ListUserRow {
  text: string;
  status: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public Users: ListUserRow[]=[];
  public chatMessages: ChatRow[]=[];
  public message: string ;
  public chat: string ;

  public submit() {
    let sendtime = new Date().toLocaleString();
    let row:ChatRow={text:this.message, date:sendtime};
    this.chatMessages.push(row);
    }
  title = 'rjc-webchat';
} 