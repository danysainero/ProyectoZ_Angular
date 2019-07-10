import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ChatserviceService } from 'src/app/service/chatservice.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-chatpage',
  templateUrl: './chatpage.component.html',
  styleUrls: ['./chatpage.component.scss']
})
export class ChatpageComponent implements OnInit {

  messages;
  newChat;
  ArrayMessages;
  id;
  private sub: any;
  constructor(private fb: FormBuilder, private chatservice: ChatserviceService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.newChat = this.fb.group({
      text: ['', Validators.compose([Validators.required])],
    });

    this.sub = this.route.params.subscribe(params => {
      this.id = params})

    this.getMessages();

  }


  async onSubmit(e, newChat) {
    if (newChat.value.text != '') {
      newChat.value._id = this.ArrayMessages[0]._id
      const data = await this.chatservice.setConversation(newChat.value);
      newChat.reset();
      await this.getMessages();
    }
  }

  async getMessages() {    
    this.ArrayMessages = await this.chatservice.getConversationsBetweenUsers(this.id).then((data) => { return data });
    this.messages = this.ArrayMessages[0].messages;
  }

}
