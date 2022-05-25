import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c5',
  templateUrl: './c5.component.html',
  styleUrls: ['./c5.component.css'],
})
export class C5Component implements OnInit {
  vista:String="lista";
  listaPersonas: Persona[] = [];
  personaNueva:Persona= {} as Persona;

  constructor() {
    this.listaPersonas.push(new Persona('1', 'pere', 20));
    this.listaPersonas.push(new Persona('2', 'ana', 10));
    this.listaPersonas.push(new Persona('3', 'maria', 40));
    this.listaPersonas.push(new Persona('4', 'gema', 30));
  }

  ngOnInit(): void {}
  borrar(persona: Persona) {

    var posicion=this.listaPersonas.indexOf(persona);
    this.listaPersonas.splice(posicion,1);
  }
  verFormulario() {
    this.vista="formulario";
  }
  insertarPersona(persona:Persona):void {

    this.listaPersonas.push(persona);
    this.vista="lista";
  }
}
