import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { DisplayComponent } from './display/display.component';
import { MapComponent } from './map/map.component';

import { FetchGeolocationService } from './fetch-geolocation.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SearchInputComponent,
    DisplayComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [FetchGeolocationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
