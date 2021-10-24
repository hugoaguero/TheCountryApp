import { Component } from '@angular/core';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent {
  searchTerm: string = '';

  constructor() { }

  search() {
    console.log(this.searchTerm);
  }

}
