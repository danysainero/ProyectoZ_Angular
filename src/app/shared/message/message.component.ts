import { Component, OnInit, Input } from '@angular/core';
import { ChatserviceService } from 'src/app/service/chatservice.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {

  @Input() message;
  senderUser = {};
  receiverUser;

  constructor(private chatserviceService: ChatserviceService) { }

  ngOnInit() {
    this.findUsersInConversation();
  }

  async findUsersInConversation() {
    this.senderUser = await this.chatserviceService.findUsersConversation(this.message.author).then((data) => { return data });
  }


}
