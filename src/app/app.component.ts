import { Component, OnInit } from '@angular/core';
import { FetchGeolocationService } from './fetch-geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ip-address-tracker-angular';
  geo = Geolocation;

  constructor(private locate: FetchGeolocationService) { }
  ngOnInit() {
    this.locate.fetchGeoLocation()
    // .subscribe(data => this.geo = data);
    // console.log(this.geo)
  }
}
