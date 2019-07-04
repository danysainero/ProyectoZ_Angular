import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../../service/user.service';
import { ChatserviceService } from 'src/app/service/chatservice.service';


@Component({
  selector: 'app-messagepage',
  templateUrl: './messagepage.component.html',
  styleUrls: ['./messagepage.component.scss']
})


export class MessagepageComponent implements OnInit {
  
  arrayConversations;
  
  constructor(private chatserviceService: ChatserviceService) { }

  ngOnInit() {
    this.getConversations();
  }
  async getConversations(){
    await this.chatserviceService.getConversations().then(data =>{
      this.arrayConversations =  data;
    })
    
     
   }
}
