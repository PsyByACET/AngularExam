import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
  // transform(items: any[], name: string ): any[] {
  //   items.sort((p1, p2) => {
  //     if(p1.name < p2.name)
  //       return -1;
  //     else
  //       return 1;
  //   });
  // }

}
