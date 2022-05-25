import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-c3',
  templateUrl: './c3.component.html',
  styleUrls: ['./c3.component.css']
})
export class C3Component implements OnInit {

  lista:number[]=[1,2,4,5,9,2,1];

  constructor() { }

  ngOnInit(): void {
  }

}
