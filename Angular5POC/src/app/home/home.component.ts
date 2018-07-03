import { Component, OnInit } from '@angular/core';
import {MouseEvent} from '@agm/core';

@Component({
  selector: 'app-home',
//  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  template: `<h1>Welcome to {{ title }}</h1>
<agm-map [latitude]="lat" [longitude]="lng" [zoom]="zoom" [disableDefaultUI]="false" [zoomControl]="false">
<agm-marker *ngFor="let m of markers; let i = index"  [latitude]="m.lat" [longitude]="m.lng" [label]="m.label"
 [markerDraggable]="m.draggable" >
</agm-marker>

<agm-kml-layer suppressInfoWindows="true" url="{{gardaUrl}}" preserveViewport=true > </agm-kml-layer>
<agm-kml-layer suppressInfoWindows="true" url="{{luasurl}}" preserveViewport=true>  </agm-kml-layer>
<agm-kml-layer suppressInfoWindows="true" url="{{dublinBikesurl}}" preserveViewport=true> </agm-kml-layer>
<agm-kml-layer suppressInfoWindows="true" url="{{binsInDublin}}" preserveViewport=true>  </agm-kml-layer>
<agm-kml-layer suppressInfoWindows="true" url="{{eventsNearMe}}" preserveViewport=true>  </agm-kml-layer>
<agm-kml-layer suppressInfoWindows="true" url="{{primarySchools}}" preserveViewport=true>  </agm-kml-layer>
</agm-map>
<label> <input type="checkbox" (change)=toggleGardaStations()> Show the Garda Stations
    </label>
<label> <input type="checkbox" (change)=toggleDublinBikes()> Show Dublin Bikes Stations
    </label>
<label> <input type="checkbox" (change)=toggleLuasStations()> Show Luas Stations
    </label>
<label> <input type="checkbox" (change)=toggleBins() > Show bins near me
    </label>
<label> <input type="checkbox" (change)=toggleEventsNearMe() > Show Events Near Me!!
    </label>
`
})
  
export class HomeComponent {
    markers: Marker[] = [
    {
      lat: 53.3438,
      lng: -6.254572,
      draggable: false
    }
  ];
title = 'Wanderlust 2.0';

  zoom = 15;
  //  url = '';
  gardaUrl = '';
  luasurl = '';
  dublinBikesurl = '';
  binsInDublin = '';
  eventsNearMe = '';
  primarySchools = '';
  // initial center position for the map
  lat = 53.3438;
  lng = -6.254572;
  infoWindowOpened = null;


  geoJsonObject: Object;

  toggleGardaStations() {
    if (this.gardaUrl === '') {
      this.gardaUrl = 'http://data.fingal.ie/datasets/kml/Garda_Stations.kml';
    } else {
      this.gardaUrl = '';
    }
  }

  toggleLuasStations() {
    if (this.luasurl === '') {
      this.luasurl = 'http://data.tii.ie/Datasets/Luas/StopLocations/luas-stops.kml';
    } else {
      this.luasurl = '';
    }
  }
  toggleDublinBikes() {
    if (this.dublinBikesurl === '') {
      this.dublinBikesurl = 'https://s3-eu-west-1.amazonaws.com/kmlfiles1/dublinbikes2.kml';
    } else {
      this.dublinBikesurl = '';
    }
  }

  toggleBins() {
    if (this.binsInDublin === '') {
      this.binsInDublin = 'https://s3-eu-west-1.amazonaws.com/kmlfiles1/binsInDublin.kml';
    } else {
      this.binsInDublin = '';
    }
  }

  togglePrimarySchools() {
    if (this.primarySchools === '') {
      this.primarySchools = 'https://s3-eu-west-1.amazonaws.com/kmlfiles1/primarySchools.kml';
    } else {
      this.primarySchools = '';
    }
  }

  toggleEventsNearMe() {
    if (this.eventsNearMe === '') {
      this.eventsNearMe = 'https://s3-eu-west-1.amazonaws.com/kmlfiles1/eventsNearMe.kml';
    } else {
      this.eventsNearMe = '';
    }
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
}

