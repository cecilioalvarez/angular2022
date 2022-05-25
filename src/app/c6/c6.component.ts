import { Persona } from './../persona';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c6',
  templateUrl: './c6.component.html',
  styleUrls: ['./c6.component.css']
})
export class C6Component implements OnInit {

  personaNueva:Persona= {} as Persona;
  constructor() { }

  ngOnInit(): void {
  }
  mostrar() {


  }
}
