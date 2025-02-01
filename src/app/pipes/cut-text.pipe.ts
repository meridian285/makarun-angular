import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutText'
})
export class CutTextPipe implements PipeTransform {

  transform(value: string, number: number): string {
    value = value.trim();
    if (value.length <= number){
      return value;
    }
    value = value.slice(0, number);
    const lastSpace: number = value.lastIndexOf(" ");
    if (lastSpace > 0) {
      value = value.substring(0, lastSpace);
    }
    return value + "...";
  }
}
