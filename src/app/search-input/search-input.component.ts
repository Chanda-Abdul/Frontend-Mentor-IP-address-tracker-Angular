import { Component, OnInit } from '@angular/core';
import { Form } from '@angular/forms';
import { FetchGeolocationService } from '../fetch-geolocation.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit {
  ipAddressOrDomain;
  search: Form;
  checkIpAddressRegex = /\S+@\S+\.\S+/;
  checkDomainRegex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

  constructor(private fetchGeolocationService: FetchGeolocationService) { }

  ngOnInit(): void {
  }
  updateLocation() {
    this.validateInput(this.ipAddressOrDomain)
  }

  validateInput(ipOrDomain) {
    this.ipAddressOrDomain = '';
    if (this.checkDomainRegex.test(ipOrDomain)) {
      this.fetchGeolocationService.fetchGeolocation(ipOrDomain);
      Swal.fire({
        icon: 'success',
        title: 'The Geolocation has been updated',
        showConfirmButton: false,
        timer: 3000,
      })
    }
    else if (this.checkIpAddressRegex.test(ipOrDomain)) {
      Swal.fire({
        title: 'Cannot search by domain at this time, check back soon.',
        icon: 'warning',
        confirmButtonText: 'Cool',
        timer: 3000,
      })
    }
    else {
      Swal.fire({
        title: 'You have entered an invalid IP address!',
        icon: 'error',
        confirmButtonText: 'Try again',
        timer: 3000,
      })

    }
  }
}

