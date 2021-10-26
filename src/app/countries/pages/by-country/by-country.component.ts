import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})
export class ByCountryComponent {
  searchTerm: string = '';
  queryError: boolean = false;
  countries: Country[] = [];
  suggestionCountry: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( searchTerm: string ) {
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

    this.countryService.searchCountry( term )
    .subscribe(
      countries => this.suggestionCountry = countries.splice(0,5),
      (err) => this.suggestionCountry = []
      );

  }

}
