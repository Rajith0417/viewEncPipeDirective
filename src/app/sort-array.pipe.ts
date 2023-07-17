import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortArray'
})
export class SortArrayPipe implements PipeTransform {

  transform(arry: any[], name: string): any[] {

    arry.sort((a:any, b:any)=>{
      if(a[name] < b[name]){
        return -1;
      }else if(a[name] > b[name]){
        return 1;
      }else{
        return 0;
      }
    });
    return arry;
  }

}
