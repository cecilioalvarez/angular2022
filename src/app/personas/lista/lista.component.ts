import { PersonaRESTService } from './../../persona-rest.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {


  listaPersonas: Persona[] = [];

  constructor(private personaREST:PersonaRESTService, private router:Router) {

    personaREST.buscarTodos().subscribe((personas) => {
      if (personas) this.listaPersonas = personas;
    });

  }

  ngOnInit(): void {
  }

  borrar(persona: Persona): void {
    this.personaREST.borrar(persona).subscribe((persona) => {
      this.personaREST.buscarTodos().subscribe((personas) => {
        if (personas) this.listaPersonas = personas;
      });
    });
  }

  detalle(persona:Persona) {

    this.router.navigate(["personas/detalle",persona.dni])


  }
}
