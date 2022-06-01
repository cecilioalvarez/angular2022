import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c9',
  templateUrl: './c9.component.html',
  styleUrls: ['./c9.component.css']
})
export class C9Component implements OnInit {

  texto:string;
  fecha:Date;
  persona:Persona;
  dinero:number;
  constructor() {

    this.texto="hola que tal"
    this.fecha= new Date();
    this.persona= new Persona("1","david",20);
    this.dinero=500;
  }

  ngOnInit(): void {
  }

}
