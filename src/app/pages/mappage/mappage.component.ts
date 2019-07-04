import { Component, OnInit, Output, Input, SimpleChanges } from '@angular/core';
import { MapsServiceService } from 'src/app/service/maps-service.service';

@Component({
  selector: 'app-mappage',
  templateUrl: './mappage.component.html',
  styleUrls: ['./mappage.component.scss']
})
export class MappageComponent {
  markers;
  iconBase = 'https://picsum.photos/id/222/100/100';
  constructor(private mapsServiceService: MapsServiceService) { }

  ngOnInit() {
    this.mapsServiceService.getMapPoints().then((data) => {
      this.markers = data;
    });
  }


  // initial center position for the map
  zoom: number = 15;
  lat: number = 40.39095112416511;
  lng: number = -3.722364206621137;

  mapClicked(event) {
    this.mapsServiceService.addMapPoints(event.coords);
  }

  markerClicked(e) {
    console.log(e);
  }
 


  icon = {
    url: 'https://assets.dryicons.com/uploads/icon/preview/11516/icon_grid_1x_a14933eb-d5a5-4b48-9d6c-075a56e521cd.png',
    scaledSize: {
      height: 30, width: 30
    }
  }


}
