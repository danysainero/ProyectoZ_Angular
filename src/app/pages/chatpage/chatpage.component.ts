import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatserviceService } from 'src/app/service/chatservice.service';

@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.scss']
})
export class ChatpageComponent implements OnInit {
  
  newChat;
  conversations;
  constructor(private fb: FormBuilder, private chatservice : ChatserviceService) { }

  ngOnInit() {  
    this.newChat = this.fb.group({
      text: ['', Validators.compose([Validators.required])], 
    });
   
  }
  async onSubmit(event, newChat){    
    /*  const data =  await this.chatservice.setConversation(newChat.value);   
     console.log(data); */
     /*this.conversations =  data; 
    newChat.reset();*/
  }


   
}
