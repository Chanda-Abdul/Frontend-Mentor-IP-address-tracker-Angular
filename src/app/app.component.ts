import { Component, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { FetchGeolocationService } from './fetch-geolocation.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ip-address-tracker-angular';
  geolocation$;



  constructor(private fetchGeolocationService: FetchGeolocationService) { }
  ngOnInit() {
    // this.subscription = this.fetchGeolocationService.geolocation$
    // .subscribe(
    //   data => {
    //     // this.geolocation$ = data
    //   }
    // )
    console.log(this.geolocation$)
    // this.showGeolocation();
    // this.showGeolocation('210.138.184.59');
  }

  showGeolocation(ipAddress?) {
    // this.isFetching = true;
    // this.fetchLocation.fetchGeoLocation(ipAddress)
    //   .pipe(
    //     map(responseData => {

    //       if (responseData) {
    //         this.geo = { ...responseData };
    //         this.currentIpAddress$ = this.geo.ip_address;
    //         this.currentLocation$ = `${this.geo.city || this.geo.country}, ${this.geo.region_iso_code || this.geo.continent} ${this.geo.postal_code || ''}`;
    //         this.currentTimezone$ = `${this.geo.timezone.abbreviation} ${this.formatTimezone(this.geo.timezone.gmt_offset)}:00`;
    //         this.currentIntServiceProvider$ = this.geo.connection.isp_name;
    //         //
    //         // console.log(this.geo)
    //         // this.currentLongitude = this.geo.longitude;
    //         // this.currentLatitude = this.geo.latitude;
    //         // console.log(this.geo,  this.currentLatitude)
    //       }
    //       return responseData;
    //     }))
    //   .subscribe(responseData => {
    //     // console.log(responseData)
    //     this.isFetching = false;


    //   }

    //   )
  }





}
