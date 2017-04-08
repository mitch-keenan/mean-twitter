import { Pipe, PipeTransform } from '@angular/core';

// See http://stackoverflow.com/a/39948486
@Pipe({
    name: 'countdown',
    pure: true
})
export class CountdownPipe implements PipeTransform {
  transform(text: string, args: number) {
    let maxLength = args || 0;
    let length = text ? text.length : 0;

    return (maxLength - length);
  }
}
