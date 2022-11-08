import { Component, OnInit } from '@angular/core';
import { FetchGeolocationService } from '../fetch-geolocation.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],

})
export class DisplayComponent implements OnInit {
  loading = true;
  geolocation$ = this.fetchGeolocationService.geolocation$
  geolocation;


  constructor(private fetchGeolocationService: FetchGeolocationService) { }

  ngOnInit(): void {
    this.fetchGeolocationService.fetchGeolocation();
    this.loading = false;
    this.geolocation$.subscribe(res =>
      this.geolocation = res);
  }


  formatTimezone(num) {
    if (num.toString()[0] === '-' && num.toString().length === 2) {
      return `-0${Math.abs(num)}`
    }
    if (num.toString().length === 1) {
      return `0${num}`
    }
    return num.toString()
  }
}
