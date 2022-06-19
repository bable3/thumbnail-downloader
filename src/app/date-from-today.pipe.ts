import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFromToday',
})
export class DateFromTodayPipe implements PipeTransform {
  transform(value: Date): unknown {
    return 'null';
  }
}
