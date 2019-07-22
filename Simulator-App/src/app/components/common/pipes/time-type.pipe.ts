import { Pipe, PipeTransform } from '@angular/core';
import { Flight } from 'src/app/models/flight';

@Pipe({
  name: 'timeType'
})
export class TimeTypePipe implements PipeTransform {
  transform(value: string): string {

    // tslint:disable-next-line: no-inferrable-types
    let newStr: string = ' ';
    let result = ' ';
    switch (value) {
      case 'S':
        newStr = 'Schedule';
        break;
      case 'E':
          newStr = 'Estimated';
          break;
      case 'm':
          newStr = 'Modify';
          break;
      default:
        newStr = 'typeTime existe pas !';
    }
    return result = '< ' + newStr + ' >';

  }

}
