import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '@app/@shared/model/group/group.model';

@Pipe({
  name: 'contractNumber',
})
export class ContractNumberPipe implements PipeTransform {

  transform(number: String): String {

    return number
      .padStart(14, '0')
      .substring(0, 14)
      .replace(/[^0-9]/, '')
      .replace(
        /(\d{4})(\d{4})(\d{6})/,
        '$1.$2.$3',
    );
  }

}
