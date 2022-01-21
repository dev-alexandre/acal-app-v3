import { Pipe, PipeTransform } from '@angular/core';
import { Group } from '@app/@shared/model/group/group.model';

@Pipe({
  name: 'group',
})
export class GroupPipe implements PipeTransform {

  transform(group: Group): String {
    return `${group.category} ${group.name} ${group.monetaryValue}`;
  }

}
