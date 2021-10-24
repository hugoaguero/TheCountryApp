import { Component } from '@angular/core';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  searchTerm: string = '';
  queryError: boolean = false;

  constructor(private countryService: CountryService) { }

  search() {
    this.queryError = false;
    console.log(this.searchTerm);

    this.countryService.searchCountry(this.searchTerm)  // forma de realizar la consulta a traves de un Observable
    .subscribe(resp => {
      console.log(resp);
    }, (err) => {
      this.queryError = true;
      console.log('Error');
      console.info(err);
    });
  }

}
