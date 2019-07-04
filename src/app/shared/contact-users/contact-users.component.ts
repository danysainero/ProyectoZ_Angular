import { Component, OnInit, Input, Output} from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-users',
  templateUrl: './contact-users.component.html',
  styleUrls: ['./contact-users.component.scss']
})

export class ContactUsersComponent implements OnInit {
  
  @Input() conversation;
  constructor() { }
  

  ngOnInit() {
    
  }


  /*  onUserClick(e,name){
     console.log(name);     
     this.route.navigateByUrl('chat', name);
   } */

} 
