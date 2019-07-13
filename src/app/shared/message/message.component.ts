import { Component, OnInit, Input } from '@angular/core';
import { ChatserviceService } from 'src/app/service/chatservice.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message;
  senderUser = {};
  receiverUser;
  i;
  @Input() index;
  myId;
  senderOrReceiver;
   constructor(private chatserviceService: ChatserviceService, private authService: AuthService) {

   
   }

   async ngOnInit() {
     this.myId = await this.authService.GetMyiD();
    this.i = await this.oddOrEven(this.myId);
    await this.findUsersInConversation();
  }

  async findUsersInConversation() {
    this.senderUser = await this.chatserviceService.findUsersConversation(this.message.author).then((data) => { return data });
  }


  async oddOrEven(miId) {
    let envi;
    if (miId === this.message.author) {    
      envi = 'receiver'      
    }
    else {
      envi = 'sender';
    }
    return envi;
  }


}