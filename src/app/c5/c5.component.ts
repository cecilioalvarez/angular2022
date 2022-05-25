import { PersonasService } from './../personas.service';
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
  personaDetalle?:Persona= {} as Persona;


  constructor(private servicio:PersonasService) {

    this.listaPersonas=servicio.buscarTodos();
  }

  ngOnInit(): void {}
  mostrarLista() {

    this.vista="lista";
  }
  borrar(persona: Persona) {

   this.servicio.borrar(persona);

  }
  verFormulario() {
    this.vista="formulario";
  }
  insertarPersona(persona:Persona):void {

   this.servicio.insertar(persona);
    this.vista="lista";
  }

  detalle(persona:Persona):void {
    this.vista="detalle";
    // asigno el elemento que pulso en la lista
    this.personaDetalle=this.servicio.buscarUno(persona.dni);
  }
}
