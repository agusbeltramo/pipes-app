import { Component } from '@angular/core';

@Component({
  selector: 'app-numeros',
  templateUrl: './numeros.component.html',
  styles: [
  ]
})
export class NumerosComponent {

  ventasNeta: number = 2567789.5567;
  porcentaje: number = 0.48312312;

  constructor() { }

}
