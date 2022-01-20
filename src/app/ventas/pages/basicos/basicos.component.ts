import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {

  nombreLower: string = 'agustin';
  nombreUpper: string = 'AGUSTIN';
  nombreCompleto: string = 'aGusTin BEltRaMO';

  fecha: Date = new Date();

  constructor() { }

}
