import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WebChatService } from './web-chat.service';
import { AppRoutingModule } from './app-routing.module';
import { WebChatComponent } from './web-chat/web-chat.component';
import { MatSelectModule} from '@angular/material/select'; 
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule} from '@angular/material/button'; 
import { MatListModule} from '@angular/material/list';
import { MatFormFieldModule} from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule  } from '@angular/forms';
import { RegisterComponent } from './register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    WebChatComponent,
    RegisterComponent
  ],
  imports: [
    MatFormFieldModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
    MatListModule,
    ReactiveFormsModule,
    AppRoutingModule
    
  ],
  providers: [WebChatService,RegisterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
