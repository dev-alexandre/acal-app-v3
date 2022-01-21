import { Pipe, PipeTransform } from '@angular/core';
import { Customer } from '@app/@shared/model/customer/customer.model';

@Pipe({
  name: 'customer',
})
export class CustomerPipe implements PipeTransform {

  transform(customer: Customer): String {
    return `${customer.name}`;
  }

}
