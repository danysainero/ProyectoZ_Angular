import { Component, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { MapsServiceService } from 'src/app/service/maps-service.service';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.scss']
})

export class MappageComponent {

  zoom: number = 15;
  lat: number;
  lng: number;

  marker = [];
  me;
  pos;
  icon = {};
  myPosition;

  constructor(private mapsServiceService: MapsServiceService, private authService: AuthService) { }

  async ngOnInit() {
    this.pos = await this.getMe().then((pos) => {
      return pos
    });
  }


  async getMe() {

    this.me = await this.authService.GetActualUser().then((user) => {
      return user;
    })

    this.myPosition = await this.mapsServiceService.getPosition().then(pos => {
      return pos;
    });

    this.mapsServiceService.setPosition(this.myPosition).then(pos => {
    });

    this.pos = await this.mapsServiceService.getMapPoints().then(pos => {
      for (let key in pos) {
        this.marker.push(pos[key]);
      }      
      return pos;
    });
    
    this.lat = this.myPosition.lat;
    this.lng = this.myPosition.lng;

    this.pos = await this.mapsServiceService.getMapPoints().then(pos => {
      for (let key in pos) {
        this.marker.push(pos[key]);
      }
      return pos;
    });
  }

}
