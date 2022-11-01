import { Component, Input, OnInit } from '@angular/core';
import { OsmMapComponent } from '../map/map.component';


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss'],

})
export class DisplayComponent implements OnInit {
  @Input() ipAddress: string = '192.212.174.101';
  @Input() location: any = 'Brooklyn, NY 10001';
  @Input() timezone: string = 'UTC -05:00';
  @Input() intServiceProvider: string = 'SpaceX StarLink';

  constructor() { }

  ngOnInit(): void {
  }

}
