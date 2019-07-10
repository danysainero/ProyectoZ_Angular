import { Component, OnInit, Input, Output} from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';
import { ChatserviceService } from 'src/app/service/chatservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-users',
  templateUrl: './contact-users.component.html',
  styleUrls: ['./contact-users.component.scss']
})

export class ContactUsersComponent implements OnInit {
  
  @Input() conversation;
  privateConversation;
  senderUser;
  receiver;
  receiverUser={};
  constructor( private authService : AuthService, private activateRoute: ActivatedRoute, private router : Router, private chatserviceService: ChatserviceService) { }
   

  ngOnInit() {    
    this.findUsersInConversation();
  }

  async findUsersInConversation(){

    let actualUser = await this.authService.GetActualUser().then((user)=> {    
      return user
    });
    
     if(this.conversation.members.sender === actualUser['_id']){        
      this.receiver = this.conversation.members.receiver;
     }else{
      this.receiver = this.conversation.members.sender;
     }
    this.receiverUser =  await this.chatserviceService.findUsersConversation(this.receiver).then((data)=>{ return data});    
  }

  async onUserClick(e, conversation){

    console.log(conversation.members.sender);

   let conv = await this.chatserviceService.findConversations(conversation.members).then((data)=>{ return data})
   console.log(conv[0].members);
   await this.router.navigate(['../', 'chat', conv[0].members], {
    relativeTo: this.activateRoute
  });
   
  }

} 

