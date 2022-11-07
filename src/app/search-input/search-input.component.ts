import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FetchGeolocationService } from '../fetch-geolocation.service';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  ipAddressOrDomain: string | number;
  checkIpAddressRegex = /\S+@\S+\.\S+/;
  checkDomainRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  constructor(private fetchGeolocationService: FetchGeolocationService, private _cd: ChangeDetectorRef) { }

  ngOnInit(): void {
  }
  updateLocation() {
    // console.log(this.ipAddressOrDomain)
    this.validateInput(this.ipAddressOrDomain)

  }

  validateInput(ipOrDomain) {
    if (this.checkIpAddressRegex.test(ipOrDomain)) {
      alert("Cannot search by domain at this time, check back soon.")
      return
    }
    if (this.checkDomainRegex.test(ipOrDomain)) {
      this.fetchGeolocationService.setIpAddress(ipOrDomain);
      // TO DO => fetch new data with ip address

      // this.fetchGeolocationService.fetchGeolocation()
      // .subscribe(responseData => {
      //   console.log(responseData)
      // });
      this.ipAddressOrDomain = '';
      this._cd.markForCheck();
    } else {
      alert("You have entered an invalid IP address!")
      return
    }
  }

}
