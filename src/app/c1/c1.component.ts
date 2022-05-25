import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c1',
  templateUrl: './c1.component.html',
  styleUrls: ['./c1.component.css']
})
export class C1Component implements OnInit {

  nombre:String="pedro";
  numero:number=5;
  persona:Persona;
  constructor() { 

    this.persona= new Persona("1","antonio",20);

  }

  ngOnInit(): void {
  }

  pulsar() {

    alert("has pulsado el boton");
  }
}
