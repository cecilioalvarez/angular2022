import { Observable } from 'rxjs';
import { PersonaRESTService } from './../persona-rest.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';
import { ThisReceiver } from '@angular/compiler';

@Component({
  selector: 'app-c7',
  templateUrl: './c7.component.html',
  styleUrls: ['./c7.component.css'],
})
export class C7Component implements OnInit {
  // no se ve esta variable desde una promesa
  listaPersonas: Persona[] = [];
  personaNueva: Persona = {} as Persona;
  personaDetalle: Persona = {} as Persona;
  personaEditar:Persona ={} as Persona;

  vista: String = 'lista';

  constructor(private personaREST: PersonaRESTService) {
    personaREST.buscarTodos().subscribe((misamigos) => {
      if (misamigos) this.listaPersonas = misamigos;
    });
  }

  ngOnInit(): void {}
  verFormulario() {

    this.vista="formulario";

  }

  detalle(persona:Persona) {
    this.vista="detalle";

    this.personaREST.buscarUno(persona.dni).subscribe((persona)=> {

          this.personaDetalle=persona;
    })

  }
  editar(persona:Persona) {
    this.vista="formularioEditar";
    this.personaEditar=persona;
  }
  salvar(persona:Persona) {

      this.personaREST.salvar(persona).subscribe((persona)=> {
        // aqui la persona no se usa

        this.personaREST.buscarTodos().subscribe((personas) => {
          if (personas) this.listaPersonas = personas;
          this.vista="lista";
        });

      });


  }
  mostrarLista() {
    this.vista="lista";
   this. personaREST.buscarTodos().subscribe((personas) => {
      if (personas) this.listaPersonas = personas;
    });

  }
  insertarPersona(personaNueva: Persona) {
    this.vista="lista";
    this.personaREST.insertar(personaNueva).subscribe((persona) => {
      this.personaREST.buscarTodos().subscribe((personas) => {
        if (personas) this.listaPersonas = personas;
      });
    });
  }

  borrar(persona: Persona): void {
    this.personaREST.borrar(persona).subscribe((persona) => {
      this.personaREST.buscarTodos().subscribe((personas) => {
        if (personas) this.listaPersonas = personas;
      });
    });
  }
}
