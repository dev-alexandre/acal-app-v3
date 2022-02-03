import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '@app/@shared/model/place/place.model';

@Pipe({
  name: 'minPlace',
})
export class MinPlacePipe implements PipeTransform {

  transform(place: Place): String {
    return `${place?.letter} - ${place?.number}`;
  }

}
