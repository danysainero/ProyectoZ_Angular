import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnInit {

  token;
  usersFiltered = new Subject();

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    /* this.filterUsers(this.searchName); */
  }

  filterUsers(searchName) {
    return this.httpClient.get(`${environment.serverURL}/users?username=${searchName}`).toPromise();
  }

 /*  getUsers() {
    return this.httpClient.get(`${environment.serverURL}/users`).toPromise();
  } */

  getUsers() {
    return this.httpClient.get(`${environment.serverURL}/users/friends`).toPromise();
  }

  RegisterUser(body) {
    return this.httpClient.post(`${environment.serverURL}/auth/sign-up`, body).toPromise();
  }

  loginUser(body) {
    return this.httpClient.post(`${environment.serverURL}/auth/login`, body).toPromise().then((res) => {
      this.token = res.token;
      localStorage.token = this.token; //aqui va el token
    });;
  }

  GetActualUser() {
    return this.httpClient.get(`${environment.serverURL}/auth/me`)
  }

  logout() {
    this.token = null;
    localStorage.removeItem('token');
    return;
  }

  getToken(): string {       
    return this.token;
  }



}

