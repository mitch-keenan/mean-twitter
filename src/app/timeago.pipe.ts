import { Pipe, PipeTransform } from '@angular/core';

const SECOND = 1000;
const MINUTE = 60 * SECOND;
const HOUR = 60 * MINUTE;
const DAY = 24 * HOUR;
const WEEK = 7 * DAY;
const MONTH = 30 * DAY;
const YEAR = 365 * DAY;

@Pipe({
    name: 'timeago',
    pure: true
})
export class TimeAgoPipe implements PipeTransform {
  transform(date: Date) {
    let timeSince = Date.now() - date.getTime();

    if(timeSince < MINUTE) {
      return 'just now';
    } else if (timeSince < HOUR) {
      return Math.round(timeSince / MINUTE) + ' minutes ago';
    } else if (timeSince < DAY) {
      return Math.round(timeSince / HOUR) + ' hours ago';
    } else if (timeSince < WEEK) {
      return Math.round(timeSince / DAY) + ' days ago';
    } else if (timeSince < MONTH) {
      return Math.round(timeSince / WEEK) + ' weeks ago';
    } else if (timeSince < YEAR) {
      return Math.round(timeSince / MONTH) + ' months ago';
    } else {
      return Math.round(timeSince / YEAR) + ' years ago';
    }
  }
}
