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
      return 'Just Now';
    } else if (timeSince < HOUR) {
      return Math.round(timeSince / MINUTE) + ' Minutes Ago';
    } else if (timeSince < DAY) {
      return Math.round(timeSince / HOUR) + ' Hours Ago';
    } else if (timeSince < WEEK) {
      return Math.round(timeSince / DAY) + ' Days Ago';
    } else if (timeSince < MONTH) {
      return Math.round(timeSince / WEEK) + ' Weeks Ago';
    } else if (timeSince < YEAR) {
      return Math.round(timeSince / MONTH) + ' Months Ago';
    } else {
      return Math.round(timeSince / YEAR) + ' Years Ago';
    }
  }
}
