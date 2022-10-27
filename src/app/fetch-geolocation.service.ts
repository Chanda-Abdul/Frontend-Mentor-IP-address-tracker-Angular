import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from "@angular/common/http";
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

    /* Query Params => add multiple new params */

    // let searchParams = new HttpParams();
    // searchParams = searchParams.append('print', 'pretty');
    // searchParams = searchParams.append('custom', 'key');

    /* */

   this.http
      .get(`${this.geoURL}?apiKey=${this.geoApiKey}`)
        .pipe(   
           map(responseData => {
          // const postsArray: Geolocation = [];
          // for (const key in responseData) {
          //   // if (responseData.hasOwnProperty(key)) {
          //     postsArray.push(responseData);
          //   // }
          // }
          console.log(responseData)
          return responseData;
        }), catchError(errResponse => {
          //send to an analytics server?
          return throwError(errResponse);
        })).subscribe();
    //         /* transform response {} into usable data before .subscribe() */
    //         map((responseData: {}) => {
    // return responseData;
    //         })

    //       ).subscribe(responseData => {
    //         // const data = { ...responseData }
    //         //
    //         console.log(responseData);
    //         // const locate: Geolocation = {
    //         //   ipAddress: '',
    //         //   location: '',
    //         //   timezone: '',
    //         //   isp: '',
    //         //   longitude: '',
    //         //   latitude: '',

    //         // }
    //         // console.log(locate, responseData)
    //       }, catchError(errResponse => {
    //         return throwError(errResponse)
    //       }))
    // .pipe(
    //   map(responseData => {
    //     const postsArray: Post[] = [];
    //     for (const key in responseData) {
    //       if (responseData.hasOwnProperty(key)) {
    //         postsArray.push({ ...responseData[key], id: key });
    //       }
    //     }
    //     return postsArray;
    //   }), catchError(errResponse => {
    //     //send to an analytics server?
    //     return throwError(errResponse);
    //   })
    // )
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
}
