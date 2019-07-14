import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapsServiceService {

  constructor(private httpClient: HttpClient) { }

  getMapPoints() {
    return this.httpClient.get(`${environment.serverURL}/mapspoints`).toPromise();
  }

  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resp => {
        resolve({ lat: resp.coords.latitude, lng: resp.coords.longitude });
        console.log(resp.coords.latitude, resp.coords.longitude);
      });
    });

  }

  setPosition(position) {
    return this.httpClient.post(`${environment.serverURL}/mapspoints`, position).toPromise();
  }
}
