import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-country-input',
  templateUrl: './country-input.component.html',
  styles: [
  ]
})
export class CountryInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();

  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject(); // el subject es un tipo de observable

  searchTerm: string = '';
  searchText: string = '';

  ngOnInit() {
    this.debouncer
    .pipe(  // metodo pipe, una conexion a algo que nos permite transformar la salida del suscribe
      debounceTime( 300 ))  // metodo RxJS, se colocan las milesimas de segundos antes de emitir el siguiente valor
    .subscribe( value => {  // suscribe al debouncer (L15)
      this.onDebounce.emit( value );
    });
  }

  search() {
    this.onEnter.emit( this.searchTerm );
  }

  keyPressed(event: any) {
    this.debouncer.next( this.searchTerm ); // next para enviar el siguiente valor y que valor enviar. Esta conectado al suscribe del noOnInit
  }



}
