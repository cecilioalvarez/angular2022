import { TestBed } from '@angular/core/testing';
import { Factura } from './factura';

import { FacturasService } from './facturas.service';

describe('FacturasService', () => {
  let service: FacturasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacturasService);
  });
  //a=5 b=7;
  //  if (a=b)--> true
  // if (a==b)--> false
  // if (a==='5')-->false/true

  it('la lista inicial es de 4 elementos', () => {
    expect(service.buscarTodos()).toEqual(service.lista);
  });

  it('insertando una nueva factura', () => {
    let factura=new Factura(1,"tableta",200);
    service.insertar(factura);
    //expect(service.buscarTodos().length).toBe(5);
    expect(service.buscarTodos()).toContain(factura);
  });

  it('borrando una  factura', () => {
    let factura=new Factura(1,"ordenador",200);
    service.borrar(factura);
    //expect(service.buscarTodos().length).toBe(5);
    expect(service.buscarTodos()).not.toContain(factura);
  });
});
