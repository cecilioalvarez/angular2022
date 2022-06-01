import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'iva'
})
export class IVAPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value*1.21;
  }

}
