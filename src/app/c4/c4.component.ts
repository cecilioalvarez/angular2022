import { Component, OnInit } from '@angular/core';
import { Persona } from '../persona';

@Component({
  selector: 'app-c4',
  templateUrl: './c4.component.html',
  styleUrls: ['./c4.component.css']
})
export class C4Component implements OnInit {

  listaPersonas:Persona[]=[];
  constructor() {

    this.listaPersonas.push(new Persona("1","pere",20));
    this.listaPersonas.push(new Persona("2","ana",10));
    this.listaPersonas.push(new Persona("3","maria",40));
    this.listaPersonas.push(new Persona("4","gema",30));


   }

  ngOnInit(): void {
  }

}
