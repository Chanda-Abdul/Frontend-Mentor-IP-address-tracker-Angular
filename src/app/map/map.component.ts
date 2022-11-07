import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { concatAll, map, mergeAll, mergeMap, Observable, pluck, tap } from 'rxjs';
import { FetchGeolocationService } from '../fetch-geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;
  geolocation$ = this.fetchGeolocationService.geolocation$;
  // TO DO => remove map controls
  // TO DO => create observable from fetch service for latitude
  // TO DO => create observable from fetch service for longitude

  constructor(private fetchGeolocationService: FetchGeolocationService) { }

  ngOnInit() {


  }
  ngAfterViewInit(): void {
    this.setMap(37.7201, -122.4414)
  }

  setMap(latitude, longitude) {
    const mapProperties = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    return this.map;
  }
}
