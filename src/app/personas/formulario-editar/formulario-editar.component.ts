import { PersonaRESTService } from './../../persona-rest.service';
import { Persona } from './../../persona';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-editar',
  templateUrl: './formulario-editar.component.html',
  styleUrls: ['./formulario-editar.component.css']
})
export class FormularioEditarComponent implements OnInit {

  personaEditar:Persona = {} as Persona
  constructor(private personaREST:PersonaRESTService,private router:Router) { }

  ngOnInit(): void {
  }

  salvar (persona:Persona) {

    this.personaREST.salvar(persona).subscribe((persona)=> {
      this.router.navigate(["/personas"]);


    })

  }
}
