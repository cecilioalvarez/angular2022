import { Injectable } from '@angular/core';
import { Persona } from './persona';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  listaPersonas: Persona[] = [];


  constructor() {

    this.listaPersonas.push(new Persona('1', 'pere', 20));
    this.listaPersonas.push(new Persona('2', 'ana', 10));
    this.listaPersonas.push(new Persona('3', 'maria', 40));
    this.listaPersonas.push(new Persona('4', 'gema', 30));

   }
   buscarUno(dni:String):Persona|undefined {

    return this.listaPersonas.find( (p)=>  p.dni==dni);

   }

  buscarTodos():Persona[] {

      return this.listaPersonas;

   }
   borrar(persona:Persona) {

    var posicion=this.listaPersonas.indexOf(persona);
    this.listaPersonas.splice(posicion,1);
   }
   insertar(persona:Persona) {
    this.listaPersonas.push(persona);
   }
}
