import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo',
})
export class TimeAgoPipe implements PipeTransform {
  transform(input: Date): string {
    const date = new Date(input);
    const now = new Date();
    const seconds = (now.getTime() - date.getTime()) / 1000;
    const minutes = seconds / 60;
    const hours = minutes / 60;
    const days = hours / 24;
    const weeks = days / 7;
    const months = weeks / 4;
    const years = months / 12;
    if (seconds < 60) {
      return `Il y'a quelques secondes`;
    } else if (minutes < 60) {
      return `Il y'a ${Math.floor(minutes)} minutes`;
    } else if (hours < 24) {
      return `Il y'a ${Math.floor(hours)} heure${hours > 1 ? 's' : ''}`;
    } else if (days < 7) {
      return `Il y'a ${Math.floor(days)} jour${days > 1 ? 's' : ''}`;
    } else if (weeks < 4) {
      return `Il y'a ${Math.floor(weeks)} semaine${weeks > 1 ? 's' : ''}`;
    } else if (months < 12) {
      return `Il y'a ${Math.floor(months)} mois`;
    } else {
      return `Il y'a ${Math.floor(years)} an${years > 1 ? 's' : ''}`;
    }
  }
}
