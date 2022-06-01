import { Factura } from './factura';

describe('Factura', () => {
  it('should create an instance', () => {
    expect(new Factura(1,"ordenador",200)).toBeTruthy();
  });
});
