import { Component, Input, OnInit } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { FetchGeolocationService } from '../fetch-geolocation.service';
import { MapComponent } from '../map/map.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],

})
export class DisplayComponent implements OnInit {

  loading = true;

  geolocation$ = this.fetchGeolocationService.geolocation$

  constructor(private fetchGeolocationService: FetchGeolocationService) { }

  ngOnInit(): void {
    this.loading = false
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
