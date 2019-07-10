import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class NotfriendsService implements OnInit {


  arrayNotFriendsUsers;
  allUsers;
  friendedUser;
  arrayFriendsUsers;
  notFriends = new Subject();
  OnlyFriends = new Subject();
  usersFiltered = new Subject();

  constructor(private httpClient: HttpClient, private notfriendsService: NotfriendsService, private authService: AuthService) { }

  async ngOnInit() {
    this.allUsers = await this.httpClient.get(`${environment.serverURL}/notfriends`).toPromise();
  }

  async getAllUsers() {
    return await this.httpClient.get(`${environment.serverURL}/notfriends`).toPromise();
  }

  async filterUsers(searchName) {
    return await this.httpClient.get(`${environment.serverURL}/users?username=${searchName}`).toPromise().then((users) => {
      return users
    });
  }

  async getNoFriends(allUsers) {
    let notFriends = []; 
    const user = await this.authService.GetActualUser(); //usuario actual
    this.friendedUser = user["friends"]; //amigos del usuario actual

    for (let i = 0; i < allUsers.length; i++) {
      let notmyfriend = true;
      for (let k = 0; k < this.friendedUser.length; k++) {
        if (allUsers[i]._id === this.friendedUser[k] || allUsers[i]._id === user['_id']) {

          notmyfriend = false;
          break;
        }
      }
      if (notmyfriend && allUsers[i]._id != user['_id']) {
        notFriends.push(allUsers[i]);
      }
    }
    return notFriends;
  }

  async getOnlyFriends(allUsers) {
    const user = await this.authService.GetActualUser(); //usuario actual
    this.friendedUser = user["friends"]; //amigos del usuario actual
    let onlyFriends = [];
    
    for (let i = 0; i < allUsers.length; i++) {
      let notmyfriend = false;

      for (let k = 0; k < this.friendedUser.length; k++) {
        if (allUsers[i]._id === this.friendedUser[k]) {
          notmyfriend = true;
          break;
        }
      }
      if (notmyfriend && allUsers[i]._id != user['_id']) {
        onlyFriends.push(allUsers[i]);
      }
    }
    return onlyFriends;
  }

  async addFriend(body) {
    await this.httpClient.put(`${environment.serverURL}/friends`, body).toPromise()
    this.allUsers = await this.getAllUsers();
    await this.getNoFriends(this.allUsers).then(data => {
      this.notFriends.next(data);
    })
    await this.getOnlyFriends(this.allUsers).then(data => {
      this.OnlyFriends.next(data);
    });
  }

  async removeFriend(body) {
    await this.httpClient.delete(`${environment.serverURL}/friends/${body.friendId}`).toPromise()
    this.allUsers = await this.getAllUsers();
    await this.getNoFriends(this.allUsers).then(data => {
      this.notFriends.next(data);
    })
    await this.getOnlyFriends(this.allUsers).then(data => {
      this.OnlyFriends.next(data);
    });
  }

}
