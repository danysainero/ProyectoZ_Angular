import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from 'src/app/service/auth.service';
import { NotfriendsService } from 'src/app/service/notfriends.service'
import { environment } from 'src/environments/environment';


@Component({
  selector: 'app-friendspage',
  templateUrl: './friendspage.component.html',
  styleUrls: ['./friendspage.component.scss']
})
export class FriendspageComponent implements OnInit {


  arrayFriendsUsers;
  arrayNotFriendsUsers;
  //allUsers;
  //friendedUsers;
  allusersFiltered;
  user;
  
  friendsServiceSubscription: Subscription;
   friendsAddedServiceSubscription: Subscription;
  friendsNotAddedServiceSubscription: Subscription;

  constructor(private notfriendsService: NotfriendsService, private authService: AuthService) { }


  async ngOnInit() {

    let allUsers = await this.notfriendsService.getAllUsers().then((allUsers) => {
      return allUsers
    })

    this.arrayNotFriendsUsers = await this.notfriendsService.getNoFriends(allUsers).then(data => {
      return data;
    });

    this.arrayFriendsUsers = await this.notfriendsService.getOnlyFriends(allUsers).then((data) => {
      return data;        
    }); 

    this.friendsAddedServiceSubscription = await this.notfriendsService.OnlyFriends.subscribe(data => {
      this.arrayFriendsUsers = data;
    })

    this.friendsNotAddedServiceSubscription = await this.notfriendsService.notFriends.subscribe(data => {
      this.arrayNotFriendsUsers = data;
    })

    this.friendsServiceSubscription = this.notfriendsService.usersFiltered.subscribe(data => {
      if (data) {
         this.notfriendsService.getNoFriends(data).then((noFriends)=>{
         this.arrayNotFriendsUsers = noFriends;})

        this.notfriendsService.getOnlyFriends(data).then((friends)=>{
        this.arrayFriendsUsers = friends;})
      }
   
  });
}

}

         /* if (data) {
      this.arrayFriendsUsers=[];
      this.arrayNotFriendsUsers = [];
      data.forEach(usario => {
        if(usuario._id === actualUser.friends.id ){
          this.arrayFriendsUsers.push(usario);
        }else{
          this.arrayNotFriendsUsers.push(usario);
        }
      });
    } */
 
      /*   this.arrayNotFriendsUsers =  this.notfriendsService.getNoFriends(data).then(data => {
         return data;
        });
        
        this.arrayFriendsUsers = this.notfriendsService.getOnlyFriends(data).then(data => {
          return data;
        });
        
        this.friendsServiceSubscription = this.notfriendsService.OnlyFriends.subscribe(data => {
          this.arrayFriendsUsers = data;
        })
        
        this.friendsServiceSubscription = this.notfriendsService.notFriends.subscribe(data => {
          this.arrayNotFriendsUsers = data;
        }) */
    
    /* this.friendsNotAddedServiceSubscription = this.notfriendsService.usersFiltered.subscribe(data => {
      //data es lo que devulve la busqueda ne forma de objetos de usuarios      
     this.notfriendsService.OnlyFriends(data);
      })
    
      this.friendsServiceSubscription =  this.notfriendsService.notFriends.subscribe(data => {
        this.arrayNotFriendsUsers = data;
      })  
    }) */

    /*   this.friendsServiceSubscription = this.notfriendsService.notFriends.subscribe(data => {
       this.arrayNotFriendsUsers = data;
     })
     
     this.friendsServiceSubscription = this.notfriendsService.OnlyFriends.subscribe(data => {
       this.arrayFriendsUsers = data;
     }) */



/*  this.friendsServiceSubscription = this.notfriendsService.notFriends.subscribe(data => {
   this.arrayNotFriendsUsers = data;
 })

 this.friendsAddedServiceSubscription = this.notfriendsService.OnlyFriends.subscribe(data => {
   this.arrayFriendsUsers = data;
 })

 this.friendsNotAddedServiceSubscription = this.notfriendsService.usersFiltered.subscribe(data => {
   //data es lo que devulve la busqueda ne forma de objetos de usuarios
   if (data) {
     this.allusersFiltered = data;
   }
 }) */



/* async getUsers() {
  const data = await this.notfriendsService.filterUsers('');
  this.arrayNotFriendsUsers = data;
  this.arrayFriendsUsers =data;
} */

/*
  async getNoFriends() {
    let notFriends = [];

    this.allUsers = await this.notfriendsService.getUsers();
    this.user = await this.authService.GetActualUser();
    this.friendedUsers = this.user['friends'];

    for (let i = 0; i < this.allUsers.length; i++) {
      let notmyfriend = true;

      for (let k = 0; k < this.friendedUsers.length; k++) {
        if (this.allUsers[i]._id === this.friendedUsers[k] || this.allUsers[i]._id === this.user['_id']) {
          notmyfriend = false;
          break;
        }
      }

      if (notmyfriend) {
        notFriends.push(this.allUsers[i]);
      }
    }
    this.arrayNotFriendsUsers = notFriends;
  }

  async getOnlyFriends() {

    let onlyFriends = [];

    this.allUsers = await this.notfriendsService.getUsers();
    this.user = await this.authService.GetActualUser();
    this.friendedUsers = this.user['friends'];
    for (let i = 0; i < this.allUsers.length; i++) {
      let notmyfriend = false;

      for (let k = 0; k < this.friendedUsers.length; k++) {
        if (this.allUsers[i]._id === this.friendedUsers[k]) {
          notmyfriend = true;
          break;
        }
      }
      if (notmyfriend) {
        onlyFriends.push(this.allUsers[i]);
      }
    }
    this.arrayFriendsUsers = onlyFriends;
    return this.arrayFriendsUsers;
  }
 */
