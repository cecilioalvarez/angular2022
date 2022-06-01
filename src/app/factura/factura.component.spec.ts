import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacturaComponent } from './factura.component';

describe('FacturaComponent', () => {
  let component: FacturaComponent;
  let fixture: ComponentFixture<FacturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('el componente se ha creado correctamente', () => {
    expect(component).toBeTruthy();
  });
  it('el componente  contiene una factura', () => {
    expect(component.factura).toBeTruthy();
  });
  it('los datos de la factura son correctos', () => {
    expect(component.factura.numero).toBe(1);
    expect(component.factura.concepto).toBe("ordenador");
    expect(component.factura.importe).toBe(100);
  });
  it('incrementar en 10 el valor del importe', () => {
    component.incrementar10();
    expect(component.factura.importe).toBe(110);
  });
});
