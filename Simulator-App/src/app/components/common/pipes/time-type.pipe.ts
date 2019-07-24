import { Pipe, PipeTransform } from '@angular/core';

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
        newStr = 'Scheduled';
        break;
      case 'E':
          newStr = 'Estimated';
          break;

      case 'M':
          newStr = 'Modify';
          break;
      case 'A':
          newStr = 'Actual';
          break;
      default:
        newStr = 'typeTime not applicable for this item';
    }
    return result = '< ' + newStr + ' >';

  }

}
