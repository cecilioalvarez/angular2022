import { Injectable } from '@angular/core';
import { Factura } from './factura';

@Injectable({
  providedIn: 'root'
})
export class FacturasService {

  lista:Factura[]=[]

  constructor() {
    this.lista=[];
    this.lista.push(new Factura(1,"ordenador",200));
    this.lista.push(new Factura(2,"televisor",1200));
    this.lista.push(new Factura(3,"auricular",100));
    this.lista.push(new Factura(4,"tablet",150));
    this.lista.push(new Factura(7,"tablet2",150));

  }

  buscarTodos(): Factura[] {

    return this.lista;
  }

  insertar(factura:Factura) {

    this.lista.push(factura);
  }
  borrar(factura:Factura) {

    let fborrar=this.lista.find((f)=>f.numero==factura.numero);
    let posicion=this.lista.indexOf(fborrar!);
    this.lista.splice(posicion,1);
  }
}
