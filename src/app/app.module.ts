import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DisplayComponent } from './display/display.component';
import { OsmMapComponent } from './map/map.component';
import { HttpClientModule } from '@angular/common/http';
import { FetchGeolocationService } from './fetch-geolocation.service';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    DisplayComponent,
    OsmMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [FetchGeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
