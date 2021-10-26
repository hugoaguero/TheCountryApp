import { Component } from '@angular/core';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class ByRegionComponent {

  regions: string[] = [ 'africa', 'americas', 'asia', 'europe', 'oceania' ];
  activeRegion: string = '';
  countries: Country[] = [];
  searchTerm: string = '';
  queryError: boolean = false;

  constructor( private countryService: CountryService ) { }

  activateRegion( region: string ) {
    if ( this.activeRegion === region ) {return;}
    
    this.activeRegion = region;
    this.countries = [];

    this.countryService.searchRegion( this.activeRegion )  // forma de realizar la consulta a traves de un Observable
    .subscribe( countries => {
      this.countries = countries;
      console.log( countries );
    });
  }

  getClassCSS( region: string ) {
    return ( this.activeRegion === region ) ? 'btn-primary': 'btn btn-outline-primary';
  }

}
