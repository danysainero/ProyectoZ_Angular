import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TimelineService implements OnInit {

  articles = new Subject();

  constructor(private route: Router, private httpClient: HttpClient) { }

  ngOnInit() {
    this.getArticles();
  }
 
  getArticles() {
    return this.httpClient.get(`${environment.serverURL}/posts`).toPromise();
  }
  
setPictures(fd){
  return this.httpClient.post(`${environment.serverURL}/posts`, fd).toPromise();
}
  setArticles(body) {   
    return this.httpClient.post(`${environment.serverURL}/posts`, body).toPromise();
    
  }
}
