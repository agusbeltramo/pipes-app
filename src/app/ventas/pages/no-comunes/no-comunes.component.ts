import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {


  // i18nSelect Pipe
  nombre: string = 'Agustin';
  genero: string = 'masculino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  };

  // i18nPlural Pipe
  clientes: string[] = ['Agustin', 'Julia', 'Pepe', 'Pedro', 'Ricardo', 'Mario'];

  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando.',
    '=1': 'tenemos un cliente esperando.',
    'other': 'tenemos # clientes esperando.'
  }


  cambiarPersona() {
    this.nombre = 'Julia';
    this.genero = 'femenino';
  }

  borrarCliente() {
    this.clientes.shift();
  }


  // Json Pipe / KeyValue Pipe
  persona = {
    nombre: 'Agustin',
    edad: '29',
    direccion: 'Rosario, Argentina'
  }


  // Async Pipe

  miObservable = interval(1000);

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de la promesa')
    }, 3500)
  })

}
