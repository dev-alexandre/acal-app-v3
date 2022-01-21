import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '@app/@shared/model/place/place.model';

@Pipe({
  name: 'place',
})
export class PlacePipe implements PipeTransform {

  transform(place: Place): String {
    return `${place.address.addressType.name} ${place.address.name} ${place?.letter} ${place?.number}`;
  }

}
