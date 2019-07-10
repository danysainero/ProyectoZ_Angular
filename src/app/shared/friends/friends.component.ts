import { Component, OnInit, Input, Output } from '@angular/core';
import { FriendsService } from 'src/app/service/friends.service';
import { AuthService } from 'src/app/service/auth.service';
import { NotfriendsService } from 'src/app/service/notfriends.service';

@Component({
  selector: 'app-friends',
  templateUrl: './friends.component.html',
  styleUrls: ['./friends.component.scss']
})
export class FriendsComponent implements OnInit { 
  actualUserId;
  i;
  @Input() user;
  @Input() index;

  constructor(private friendsService: FriendsService, private notfriendsService: NotfriendsService, private authService: AuthService) { }

  ngOnInit() {
    this.i = this.oddOrEven(this.index);
    this.authService.GetActualUser().then((user) => {
      this.actualUserId = user['_id'];
    });

  }

  oddOrEven(x) {
    return (x & 1) ? "odd" : "even";
  }

  async addFriend(e, user) {    
    const data = { friendId: user._id, myId: this.actualUserId };
    await this.notfriendsService.addFriend(data);    
  }

 

}
