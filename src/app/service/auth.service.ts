import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements OnInit {

  token;


  constructor(private httpClient: HttpClient) { }

  ngOnInit() {

  }


  getUsers() {
    return this.httpClient.get(`${environment.serverURL}/users/friends`).toPromise();
  }

  RegisterUser(body) {
    return this.httpClient.post(`${environment.serverURL}/auth/sign-up`, body).toPromise();
  }


  loginUser(body) {
    return this.httpClient.post<any>(`${environment.serverURL}/auth/login`, body).toPromise().then((res) => {
      this.token = res.token;
      localStorage.token = this.token;
    });;
  }

  GetActualUser() {       
    return this.httpClient.get(`${environment.serverURL}/auth/me`).toPromise()
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    return;
  }

  getToken(): string {
    this.token = localStorage.getItem('token');
    return this.token;
  }


}

