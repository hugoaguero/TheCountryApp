import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Country } from '../interfaces/country.interface';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) { }

  searchCountry(term: string): Observable<Country[]> {
    const url = `${this.apiUrl}/name/${term}`;
    return this.http.get<Country[]>(url)
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
