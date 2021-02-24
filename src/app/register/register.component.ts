import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebChatService } from '../web-chat.service';
import { User } from '../model/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  reactiveFormRegister : FormGroup ;

  userNew = {} as User ;

  constructor(private service: WebChatService) {
    
    
    this.reactiveFormRegister = new FormGroup({
      name : new FormControl(''),
      email : new FormControl(''),
      birthday : new FormControl(''),
      nation : new FormControl(''),
      statusMessage :new FormControl('')
      });
    
  }

  public submitNewUser() {
     //console.log(newU);
     if (this.reactiveFormRegister.invalid) {
       return;
     }
    
     this.userNew.name=this.reactiveFormRegister.get('name').value;
     this.userNew.email=this.reactiveFormRegister.get('email').value;
     this.userNew.birthday=this.reactiveFormRegister.get('birthday').value;
     this.userNew.nation=this.reactiveFormRegister.get('nation').value;
     this.userNew.statusMessage=this.reactiveFormRegister.get('statusMessage').value; 
     
     //console.log(this.userNew.email);

     //let a = (this.reactiveFormRegister.get('name').value);
     //console.log(a);
    // console.log(this.reactiveFormRegister.get('name').value);
    
    this.service.newUser(this.userNew).subscribe();
    // this.router.navigate(['']);
    }

  ngOnInit(): void {
    
  }

}
