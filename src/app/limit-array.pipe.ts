import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'limitArray'
})
export class LimitArrayPipe implements PipeTransform {

  transform(arr: any[], filter: number): any[] {
    return arr.filter((item)=>{
      // console.log(item+"-"+filter);
      return item >= filter ? 1 : -1;
    });
    // return arr;
  }

}
