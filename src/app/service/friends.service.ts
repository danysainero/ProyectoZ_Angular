import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FriendsService {

  usersFiltered = new Subject();

  constructor(private httpClient: HttpClient) { }
  
  filterUsers(searchName) {
    return this.httpClient.get(`${environment.serverURL}/users?username=${searchName}`).toPromise();
  }

  addFriend(body){ 
 return  this.httpClient.put(`${environment.serverURL}/friends`, body).toPromise();

  }
 
  removeFriend(body){  
  return  this.httpClient.delete(`${environment.serverURL}/friends/${body.friendId}`).toPromise();
  }

}
