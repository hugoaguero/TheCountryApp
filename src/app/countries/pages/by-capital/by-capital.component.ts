import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent {
  searchTerm: string = '';
  queryError: boolean = false;
  countries: Country[] = [];

  constructor( private countryService: CountryService ) { }

  search( searchTerm: string ) {
    this.searchTerm = searchTerm;
    this.queryError = false;
    console.log( this.searchTerm );

    this.countryService.searchCapital( this.searchTerm )  // forma de realizar la consulta a traves de un Observable
    .subscribe( capitals => {
      console.log( capitals );
      this.countries = capitals;
    }, ( err ) => {
      this.queryError = true;
      console.log( 'Error' );
      console.info( err );
      this.countries = [];
    });
  }

}
