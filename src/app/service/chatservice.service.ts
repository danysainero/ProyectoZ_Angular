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
    return this.httpClient.get(`${environment.serverURL}/chats`).toPromise();
    }

}
 