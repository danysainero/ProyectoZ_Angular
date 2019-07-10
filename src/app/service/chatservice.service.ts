import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatserviceService implements OnInit{
  

  constructor(private route: Router, private httpClient: HttpClient) { }

  ngOnInit() {   
  }

  getConversations() {
    return this.httpClient.get(`${environment.serverURL}/chats`).toPromise()
    }

    getConversationsBetweenUsers(body){
      return this.httpClient.post(`${environment.serverURL}/chats/private`, body).toPromise()
    }
 

    setConversation(text){           
     return this.httpClient.put(`${environment.serverURL}/chats`, text).toPromise()
    }

    createConversation(body){
      return this.httpClient.post(`${environment.serverURL}/chats`, body).toPromise()
    }

    findUsersConversation(id){
      return this.httpClient.get(`${environment.serverURL}/chats/${id}`).toPromise();
    }

    findConversations(body){
      return this.httpClient.post(`${environment.serverURL}/chats/private`, body).toPromise()
    }
}
 