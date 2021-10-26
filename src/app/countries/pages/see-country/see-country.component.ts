import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // tiene todo lo necesario para suscribir cualquier cambio del url
import { switchMap, tap } from 'rxjs/operators';

import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  country!: Country;  // el signo ! trata a la variable como si siempre tuviera data, pero puede ser nulo

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) { } // debe estar antes del ngOnInit(inicializa)

  ngOnInit(): void {
    // 2° version:
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.countryService.getCountryByAlpha( id ) ), // enviamos el ID obtenido en L24 al metodo para suscribirme y obtener esa informacion
        tap( console.log ) // tap es un operador que dispara un efecto secundario. recibe el producto del switchMap y lo imprime en un console.log
        // tap( resp => console.log(resp)) // forma estandar de hacer una impresion
      )
      .subscribe( country => this.country = country);


    // 1° version:
    // this.activatedRoute.params  // dentro de params buscamos el observable suscribe()
    // .subscribe( ({ id }) => {
    //   console.log( id )

    //   this.countryService.getCountryByAlpha( id ) // enviamos el ID obtenido en L33 al metodo para suscribirme y obtener esa informacion
    //   .subscribe( country => {
    //     console.log( country );
    //   });
    // });
  }

}
