import { Calculadora } from './calculadora';

describe('Calculadora', () => {

  let calculadora:Calculadora;
  beforeEach(()=> {

      calculadora= new Calculadora();
  })
  it('Creando un objeto calculadora', () => {
    expect(calculadora).toBeTruthy();
  });

  it('Sumando con la calculadora', () => {

    expect(calculadora.sumar(2,2)).toBe(4);
  });
  it('Multiplicar con la calculadora', () => {

    expect(calculadora.sumar(2,2)).toBe(4);
  });
  it('Restar con la calculadora', () => {

    expect(calculadora.restar(2,2)).toBe(0);
  });
  it('Dividir con la calculadora', () => {

    expect(calculadora.dividir(2,2)).toBe(1);
  });
});

