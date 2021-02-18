import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { WebChatService } from './web-chat.service';
import { AppRoutingModule } from './app-routing.module';
import { WebChatComponent } from './web-chat/web-chat.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    WebChatComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule
  ],
  providers: [WebChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
