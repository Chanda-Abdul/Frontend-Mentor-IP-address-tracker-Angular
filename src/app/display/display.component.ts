import { Component, OnInit } from '@angular/core';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { OsmMapComponent } from '../map/map.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],

})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
