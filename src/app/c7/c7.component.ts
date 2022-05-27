import { Observable } from 'rxjs';
import { PersonaRESTService } from './../persona-rest.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c7',
  templateUrl: './c7.component.html',
  styleUrls: ['./c7.component.css'],
})
export class C7Component implements OnInit {
  // no se ve esta variable desde una promesa
  listaPersonas: Persona[] = [];
  personaNueva: Persona = {} as Persona;
  vista: String = 'lista';

  constructor(private personaREST: PersonaRESTService) {
    let observable: Observable<Persona[]> = personaREST.buscarTodos();

    observable.subscribe((misamigos) => {
      if (misamigos) this.listaPersonas = misamigos;
    });
  }

  ngOnInit(): void {}
  verFormulario() {

    this.vista="formulario";

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
