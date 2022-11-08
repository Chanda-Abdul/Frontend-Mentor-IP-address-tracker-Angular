import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, tap, throwError } from 'rxjs';
import { Geolocation } from "./geolocation.model";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FetchGeolocationService {
  private geoURL = 'https://ipgeolocation.abstractapi.com/v1/';

  private geolocationResult!: Geolocation | undefined;

  private geoBehaviorSubject = new BehaviorSubject(this.geolocationResult);

  readonly geolocation$ = this.geoBehaviorSubject.asObservable()

  constructor(private http: HttpClient) { }


  fetchGeolocation(ipAddress?): void {
    this.http.get<Geolocation>(
      `${this.geoURL}?api_key=${environment.IP_GEOLOCATION_API_KEY}`
      + (ipAddress ? `&ip_address=${ipAddress}` : ""),
      {
        params: {
          fields: 'ip_address,city,country,continent,region_iso_code,postal_code,longitude,latitude,timezone,connection'
        }
      }).pipe(catchError(this.handleError))
      .subscribe(
        res => {
          this.geoBehaviorSubject.next(res);
        }
      )
  }


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
