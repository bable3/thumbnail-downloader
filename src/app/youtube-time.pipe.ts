import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'youtubeTime',
})
export class YoutubeTimePipe implements PipeTransform {
  transform(value: string): unknown {
    let time = value
      .replace('PT', '')
      .replace('H', ':')
      .replace('M', ':')
      .replace('S', '');
    time = time
      .split(':')
      .map((item) => {
        if (item.length === 1) {
          return `0${item}`;
        }
        return item;
      })
      .join(':');
    if (time.indexOf('0') === 0) {
      time = time.substr(1);
    }
    return time;
  }
}
