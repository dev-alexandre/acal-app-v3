import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '../model/address/address.model';

@Pipe({
  name: 'partner',
})
export class PartnerPipe implements PipeTransform {

  transform(partner: String): String {

    if(partner === 'FOUNDER') {
      return "Sócio Fundador"
    }
    else if (partner === 'EFFECTIVE') {
      return "Sócio Efetivo"
     }
    else if (partner === 'TEMPORARY') {
      return "Sócio Temporário"
    }

    return '';
  }

}
