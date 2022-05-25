import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c2',
  templateUrl: './c2.component.html',
  styleUrls: ['./c2.component.css']
})
export class C2Component implements OnInit {

  numero:number
  constructor() {
    this.numero=0;
   }

  ngOnInit(): void {
  }

  mas() {
    this.numero++;
  }
  menos() {
    this.numero--;
  }
}
