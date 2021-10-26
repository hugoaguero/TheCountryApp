import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
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
  countries: Country[] = [];

  constructor(private countryService: CountryService) { }

  search(searchTerm: string) {
    this.searchTerm = searchTerm;
    this.queryError = false;
    console.log( this.searchTerm );

    this.countryService.searchCountry( this.searchTerm )  // forma de realizar la consulta a traves de un Observable
    .subscribe( countries => {
      console.log( countries );
      this.countries = countries;
    }, ( err ) => {
      this.queryError = true;
      console.log( 'Error' );
      console.info( err );
      this.countries = [];
    });
  }

  suggestion( term: string ) {
    this.queryError = false;
  }

}
