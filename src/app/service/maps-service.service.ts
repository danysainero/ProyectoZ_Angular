import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MapsServiceService {

  constructor(private httpClient: HttpClient) { }

  getMapPoints() {
    return this.httpClient.get(`${environment.mockApiMarkersURL}/mapspoints`).toPromise();
  }

  addMapPoints(coords) {
    return this.httpClient.post(`${environment.mockApiMarkersURL}/mapspoints`, coords).toPromise();
  }
}
