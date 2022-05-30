import { PersonaRESTService } from './../../persona-rest.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-insertar',
  templateUrl: './formulario-insertar.component.html',
  styleUrls: ['./formulario-insertar.component.css']
})
export class FormularioInsertarComponent implements OnInit {

  personaNueva:Persona= {} as Persona

  constructor(private personaREST:PersonaRESTService, private router:Router) { }

  ngOnInit(): void {
  }

  insertar(persona:Persona) {

    this.personaREST.insertar(persona).subscribe((persona)=> {
      // con solicitarle que navege es suficiente
      this.router.navigate(["/personas"]);

    })

  }
}
