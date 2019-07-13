import { Component, OnInit, Input } from '@angular/core';
import { ChatserviceService } from 'src/app/service/chatservice.service';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-messagepage',
  templateUrl: './messagepage.component.html',
  styleUrls: ['./messagepage.component.scss']
})


export class MessagepageComponent implements OnInit {
  idReceiver;
  idSender;
  arrayConversations;
  
  constructor(private chatserviceService: ChatserviceService, private authService : AuthService) { }

  ngOnInit() {
    this.getConversations();
    this.idReceiver = this.chatserviceService.idReceiver;
    this.idSender = this.chatserviceService.idSender
  }

  
  async getConversations(){
    this.arrayConversations =  await this.chatserviceService.getConversations().then((data)=>{ return data}); 
   }

}
