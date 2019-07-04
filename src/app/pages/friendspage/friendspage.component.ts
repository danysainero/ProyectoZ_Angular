import { Component, OnInit} from '@angular/core';
import { UserService } from '../../service/user.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-friendspage',
  templateUrl: './friendspage.component.html',
  styleUrls: ['./friendspage.component.scss']
})
export class FriendspageComponent implements OnInit{

  arrayApiUsers;
  
  friendsServiceSubscription: Subscription;

  constructor(private userService: UserService) { }


  ngOnInit() {
    this.getUsers();
    this.friendsServiceSubscription = this.userService.usersFiltered.subscribe(data => {
      if (data) {
        this.arrayApiUsers = data;        
      }
    })
  }

ngOnDestroy(){
  if(this.friendsServiceSubscription){
    this.friendsServiceSubscription.unsubscribe();
  } 
  }

  async getUsers() {
    const data = await this.userService.filterUsers('');
    this.arrayApiUsers = data;
  }
  
}
