import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';

import { Persona } from '../persona';

@Component({
  selector: 'app-c8',
  templateUrl: './c8.component.html',
  styleUrls: ['./c8.component.css'],
})
export class C8Component implements OnInit {
  persona: Persona = {} as Persona;

  constructor() {}

  ngOnInit(): void {}

  validar(f: NgForm) {
    if (f.valid) {


    }
  }


}
