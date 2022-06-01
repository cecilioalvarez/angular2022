import { Component, OnInit } from '@angular/core';
import { Factura } from '../factura';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css'],
})
export class FacturaComponent implements OnInit {
  factura: Factura;
  constructor() {
    this.factura = new Factura(1, 'ordenador', 100);
  }

  ngOnInit(): void {

  }
  incrementar10() {

    this.factura.importe=this.factura.importe+10;
  }
}
