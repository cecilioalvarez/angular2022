import { Alumno } from './../alumno';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c10',
  templateUrl: './c10.component.html',
  styleUrls: ['./c10.component.css']
})
export class C10Component implements OnInit {

  alumno:Alumno;
  alumnoSeleccionado:Alumno= {} as Alumno;
  lista:string[]=["hola","que","tal","estas"];
  listaAlumnos:Alumno[]=[];
  seleccion:string="";
  constructor() {
    this.alumno= new Alumno("pedro","perez","eso",true);
    this.listaAlumnos.push(new Alumno("pedro","gomez","eso",true))
    this.listaAlumnos.push(new Alumno("ana","alvarez","universitario",false))
    this.listaAlumnos.push(new Alumno("gema","blanco","tecnico",true))

  }

  ngOnInit(): void {


  }

}
