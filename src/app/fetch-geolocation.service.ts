import { HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { Injectable, ViewChild } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Geolocation } from "./geolocation.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FetchGeolocationService {

  geoURL = 'https://ipgeolocation.abstractapi.com/v1/';



  ipAddress;
  @ViewChild('map', { static: true }) mapElement: any;
  map: google.maps.Map;

  longitude$: number;
  latitude$: number;
  geolocation$ = this.fetchGeolocation();

  constructor(private http: HttpClient) { }


  setIpAddress(ipAddressOrDomain) {
    this.ipAddress = ipAddressOrDomain;
    this.fetchGeolocation();
    console.log(this.ipAddress, this.geolocation$)
  }
  fetchGeolocation():Observable<Geolocation> {
    return this.http.get<Geolocation>(
      `${this.geoURL}?api_key=${environment.IP_GEOLOCATION_API_KEY}`
      + (this.ipAddress ? `&ip_address=${this.ipAddress}` : ""),
      {
        params: {
          fields: 'ip_address,city,country,continent,region_iso_code,postal_code,longitude,latitude,timezone,connection'
        }
      })
      .pipe(
        tap(data => {
          console.log('Geolocation: ', data, data.latitude, this.longitude$, this.latitude$)

          this.longitude$ = data.longitude,
            this.latitude$ = data.latitude,
            // this.setMap(this.longitude$, this.latitude$)
            console.log(this.longitude$, this.latitude$)
          // this.getCurrentLocation()
        }), map(data => data),
        catchError(this.handleError)
      );
  }

  // setMap(latitude, longitude){
  //   const mapProperties = {
  //       center: new google.maps.LatLng(latitude, longitude),
  //       zoom: 14,
  //       mapTypeId: google.maps.MapTypeId.ROADMAP
  //     };
  //     this.map = new google.maps.Map(this.mapElement.nativeElement, mapProperties);
  //     return this.map;
  // }

  // getLong() {
  //   const cords = { long: this.longitude$, lat: this.latitude$ }
  //   console.log(this.longitude$)
  //   return this.longitude$
  // }

  // fetchGeoLocation(ipAddress?): Observable<Geolocation> {
  //   return this.http
  //     .get<Geolocation>((`${this.geoURL}?api_key=${environment.IP_GEOLOCATION_API_KEY}&fields=ip_address,city,country,continent,region_iso_code,postal_code,longitude,latitude,timezone,connection`)
  //       + (ipAddress ? `&ip_address=${ipAddress}` : ''))
  //     .pipe(
  //       tap(res => {
  //         //   this.longitude = res.longitude;
  //         //   this.latitude = res.latitude;
  //         // // this.fetchMapping(this.longitude, this.latitude, res.longitude, res.latitude);
  //         console.log(res)
  //       }),
  //       catchError(this.handleError)
  //     )
  // }

  // fetchMapping(longitude, latitude): Observable<any> {
  //   return this.http
  //     .get<any>
  //     ((`${this.mappingURL}?key=${environment.GOOGLE_MAPS_API_KEY}
  //     &center=${longitude},${latitude}&size=400x400&zoom=12`))
  //     .pipe(
  //       tap(res => {
  //       //   this.longitude = res.longitude;
  //       //   this.latitude = res.latitude;
  //         console.log(res)
  //       }),
  //       catchError(this.handleError)
  //     )
  // }
  // getCurrentLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition(position => {

  //       this.latitude$ = position.coords.latitude;
  //       this.longitude$ = position.coords.longitude;
  //     });
  //     console.log(this.latitude$, this.longitude$)
  //   }
  //   else {
  //     alert("Geolocation is not supported by this browser.");
  //   }
  // }

  private handleError(error: HttpErrorResponse): Observable<never> {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${error.error.message}`;
      // console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.message);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => errorMessage);
  }
}
