import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs';
import { FriendsService } from 'src/app/service/friends.service';

@Component({
  selector: 'app-friendspage',
  templateUrl: './friendspage.component.html',
  styleUrls: ['./friendspage.component.scss']
})
export class FriendspageComponent implements OnInit{

  arrayNotFriendsUsers;
  
  friendsServiceSubscription: Subscription;

  constructor(private friendsService: FriendsService) { }


  ngOnInit() {
    this.getUsers();
    
    this.friendsServiceSubscription = this.friendsService.usersFiltered.subscribe(data => {
      if (data) {
        this.arrayNotFriendsUsers = data;        
      }
    })
  }

ngOnDestroy(){
  if(this.friendsServiceSubscription){
    this.friendsServiceSubscription.unsubscribe();
  } 
  }

  async getUsers() {
    const data = await this.friendsService.filterUsers('');
    this.arrayNotFriendsUsers = data;
  }
  
}
