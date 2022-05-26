import { PersonaRESTService } from './../persona-rest.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c7',
  templateUrl: './c7.component.html',
  styleUrls: ['./c7.component.css']
})
export class C7Component implements OnInit {

  // no se ve esta variable desde una promesa
  listaPersonas: Persona[] = [];

  constructor(private personaREST:PersonaRESTService) {

    personaREST.buscarTodos().then( (personas)=> {

        if(personas) this.listaPersonas= personas;


    })


   }

  ngOnInit(): void {


  }

}
