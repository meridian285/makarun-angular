import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatPhone'
})
export class FormatPhonePipe implements PipeTransform {

  transform(value: string): string {
    let result: string = value;
    result = result.replace(/([0-9]{3})([0-9]{2})([0-9]{3})([0-9]{2})([0-9]{2})/g, '+$1 ($2) $3-$4-$5');
    return result;
  }
}
