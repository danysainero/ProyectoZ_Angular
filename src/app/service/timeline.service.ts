import { Injectable, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class TimelineService implements OnInit {

  articles = new Subject();

  constructor(private route: Router, private httpClient: HttpClient, private authService: AuthService) { }

  ngOnInit() {
    this.getArticles;
  }

  getArticles() {
    return this.httpClient.get(`${environment.serverURL}/posts`).toPromise();
  }

  getUserPosted(body) {
   return this.httpClient.post(`${environment.serverURL}/postsuser`, body).toPromise()/* .then((data)=>{    
      return data['username'];
    }); */
  }

  async setPictures(fd) {
    return await this.httpClient.post(`${environment.serverURL}/posts`, fd).toPromise();
  }
  async setArticles(body) {
    return await this.httpClient.post(`${environment.serverURL}/posts`, body).toPromise();

  }
}
