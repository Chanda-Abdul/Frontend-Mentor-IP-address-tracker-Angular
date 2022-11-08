import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { } from 'googlemaps';
import { FetchGeolocationService } from '../fetch-geolocation.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;

  @Input() position;
  geolocation$ = this.fetchGeolocationService.geolocation$
  longitude$: number| undefined;
  latitude$: number| undefined;

  constructor(private fetchGeolocationService: FetchGeolocationService) { }

  ngOnInit(): void {

  }

  ngAfterViewInit(): void {
    this.geolocation$.subscribe(res => {
      this.longitude$ = res.longitude;
      this.latitude$ = res.latitude;
      this.setMap(this.latitude$, this.longitude$);
    })
  }

  setMap(latitude, longitude) {
    const mapProperties = {
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      disableDefaultUI: true,
    };
    const map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
    const image = "assets/svg/icon-location.svg";
    new google.maps.Marker({
      position: map.getCenter(),
      icon: image,
      map: map,
    });
    return map;
  }
}
