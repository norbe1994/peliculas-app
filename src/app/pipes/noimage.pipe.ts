import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'noimage'
})
export class NoimagePipe implements PipeTransform {
  transform(url: string): string {
    if (!url) {
      return 'assets/img/noimage.png'
    }
    return url
  }
}
