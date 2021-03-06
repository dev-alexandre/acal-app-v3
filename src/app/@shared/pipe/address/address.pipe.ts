import { Pipe, PipeTransform } from '@angular/core';
import { Address } from '@app/@shared/model/address/address.model';

@Pipe({
  name: 'address',
})
export class AddressPipe implements PipeTransform {

  transform(address: Address): String {
    return `${address.addressType.name} ${address.name}`;
  }

}
