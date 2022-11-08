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

  ngOnInit(): void { }
}
