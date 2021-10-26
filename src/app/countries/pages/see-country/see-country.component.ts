import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // tiene todo lo necesario para suscribir cualquier cambio del url
import { switchMap } from 'rxjs/operators';

import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-see-country',
  templateUrl: './see-country.component.html',
  styles: [
  ]
})
export class SeeCountryComponent implements OnInit {

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) { } // debe estar antes del ngOnInit(inicializa)

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(

      )
      .subscribe( res => {
        console.log( res );
      });


    // 1° version:
    // this.activatedRoute.params  // dentro de params buscamos el observable suscribe()
    // .subscribe( ({ id }) => {
    //   console.log( id )

    //   this.countryService.getCountryByAlpha( id ) // enviamos el ID obtenido en L22 al metodo para suscribirme y obtener esa informacion
    //   .subscribe( country => {
    //     console.log( country );
    //   });
    // });
  }

}
