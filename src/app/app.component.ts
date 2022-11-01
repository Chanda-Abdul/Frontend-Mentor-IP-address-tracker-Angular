import { Component, OnInit } from '@angular/core';
import { FetchGeolocationService } from './fetch-geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ip-address-tracker-angular';
  geo: Geolocation | any;
  headers;
  currentIpAddress: string = '192.212.174.101';
  currentLocation: any = 'Brooklyn, NY 10001';
  currentTimezone: string = 'UTC -05:00';
  currentIntServiceProvider: string = 'SpaceX StarLink';



  constructor(private locate: FetchGeolocationService) { }
  ngOnInit() {

    console.log(this.showGeolocation())
    // .subscribe(data => this.geo = data);
    // console.log(this.geo)
  }

  showGeolocation() {
    this.locate.fetchGeoLocation()
      .subscribe(data => {
        const keys = data.headers.keys();
        this.headers = keys.map(key => `${key}: ${data.headers.get(key)} `)
        this.geo = { ...data.body! }
        this.currentIpAddress = this.geo.ip;
        this.currentLocation = this.geo.location;
        this.currentTimezone = this.geo.location.timezone;
        this.currentIntServiceProvider = this.geo.isp;
        console.log(this.geo)
      }

      )
  }
}
