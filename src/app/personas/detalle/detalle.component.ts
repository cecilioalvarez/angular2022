import { PersonaRESTService } from './../../persona-rest.service';
import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/persona';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css'],
})
export class DetalleComponent implements OnInit {
  personaDetalle: Persona = {} as Persona;
  constructor(
    private personaREST: PersonaRESTService,
    private ruta: ActivatedRoute
  ) {
    // lo que dice es los parametros que tiene la ruta
    // la modificacion de los param map

    this.ruta.paramMap.subscribe((parametros) => {
      this.personaREST
        .buscarUno(parametros.get('dni')!)
        .subscribe((persona) => {
          this.personaDetalle = persona;
        });
    });
  }

  ngOnInit(): void {}
  mostrarLista() {}
}
