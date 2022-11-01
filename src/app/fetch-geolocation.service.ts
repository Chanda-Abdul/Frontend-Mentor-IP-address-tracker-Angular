import { HttpClient, HttpErrorResponse, HttpEventType, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Subject, Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators';
import { Geolocation } from "./fetch-geolocation.model";

@Injectable({
  providedIn: 'root'
})
export class FetchGeolocationService {
  error = new Subject<''>();
  geoURL = 'https://geo.ipify.org/api/v2/country,city';
  geoApiKey = 'at_Ff1Zn6oV6t7Jyv01ijlrDPUa6uaUs';
  leafletURL = 'https://geo.ipify.org/api/v2/country,city';
  leafletApiKey = 'at_Ff1Zn6oV6t7Jyv01ijlrDPUa6uaUs';

  constructor(private http: HttpClient) { }

  fetchGeoLocation() {
    return this.http
      .get<HttpResponse<Geolocation>>(`${this.geoURL}?apiKey=${this.geoApiKey}`, { observe: 'response' })
      .pipe(
        catchError(this.handleError)
      )
  }
  fetchMapping() {
    const leafletURL = 'https://geo.ipify.org/api/v2/country,city';
    const apiKey = 'at_Ff1Zn6oV6t7Jyv01ijlrDPUa6uaUs';

    // return this.http
    //   .get(`${leafletURL}?apiKey=${apiKey}`).pipe().subscribe(responseData => {
    //     const data = { ...responseData }
    //     // const {responseData.ip, location} = responseData; ip
    //     const locate: Geolocation = {
    //       ipAddress: '',
    //       location: '',
    //       timezone: '',
    //       isp: '',
    //       longitude: '',
    //       latitude: '',

    //     }
    //     console.log(locate, responseData)
    //   }, catchError(errResponse => {
    //     return throwError(errResponse)
    //   }))

  }
  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
