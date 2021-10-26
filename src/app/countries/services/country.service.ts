import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v2';

  get httpParams() {
    return new HttpParams().set( 'fields', 'flag,name,capital,area,population,timezones,alpha2Code' ); // van separados por coma "," los valores
  }

  constructor( private http: HttpClient ) { }

  searchCountry( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/name/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
  }

  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/capital/${ term }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } )
  }

  getCountryByAlpha( id: string ): Observable<Country> {
    const url = `${ this.apiUrl }/alpha/${ id }`;
    return this.http.get<Country>( url )
  }

  searchRegion( region: string ): Observable<Country[]> {
    const url = `${ this.apiUrl }/region/${ region }`;
    return this.http.get<Country[]>( url, { params: this.httpParams } );
  }
}

// import { catchError } from 'rxjs/operators';

// searchCountry(term: string): Observable<any> {
//   const url = `${this.apiUrl}/name/${term}`;
//   return this.http.get(url)
//     .pipe(
//       catchError(err => of(['error']))
//     );
// }

// para colocar cualquier operador de RxJS para ejecutar una función en base al producto
// de esta peticion y regresa en este caso un Observable, el of es un funcion que genera
// observables el cual transforma lo que sea que se pongan entre los parentesis en un 
// nuevo observable
