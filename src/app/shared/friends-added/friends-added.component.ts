import { Component, OnInit, Input, Output } from '@angular/core';
import { FriendsService } from 'src/app/service/friends.service';
import { AuthService } from 'src/app/service/auth.service';
import { NotfriendsService } from 'src/app/service/notfriends.service';
import { ChatserviceService } from 'src/app/service/chatservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-friends-added',
  templateUrl: './friends-added.component.html',
  styleUrls: ['./friends-added.component.scss']
})
export class FriendsAddedComponent implements OnInit {
  actualUserId;
  i;
  members =[];
  @Input() userAdded;
  @Input() index;

 constructor(private acivateRoute: ActivatedRoute, private router: Router, private notfriendsService: NotfriendsService, private authService: AuthService, private chatserviceService: ChatserviceService) { }

  ngOnInit() {
    this.i = this.oddOrEven(this.index);  

   this.authService.GetActualUser().then((user)=>{      
    this.actualUserId =  user['_id'];
    });
 
  }

  oddOrEven(x) {
    return (x & 1) ? "odd" : "even";
  }

    async removeFriend(e, user) {     
      const body = { friendId: user._id, myId: this.actualUserId };
       await this.notfriendsService.removeFriend(body)
    }

 
    async messageToFriend(e, user){
      this.members.push(this.actualUserId);
      this.members.push(user._id);      
     let conve = await this.chatserviceService.findUsersConversation('eoigj4o5hyu').then((data)=>{ return data});
     if (conve!=null) {
      await this.chatserviceService.createConversation(this.members).then((data)=>{ return data});
     }else{
      this.router.navigate(['../', 'messages'], {
        relativeTo: this.acivateRoute
      });  
     }
       }



}
 
