import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient: HttpClient) { }


  async changeSettings(body){
      return await this.httpClient.put(`${environment.serverURL}/users`, body).toPromise()
  }
}
