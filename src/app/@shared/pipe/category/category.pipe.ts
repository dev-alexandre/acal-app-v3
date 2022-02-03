import { Pipe, PipeTransform } from '@angular/core';
import { Category } from '@app/@shared/model/category/category.model';
import { Group } from '@app/@shared/model/group/group.model';

@Pipe({
  name: 'category',
})
export class CategoryPipe implements PipeTransform {

  transform(category: Category): String {

    if (category === 'FOUNDER') {
      return 'Fundador';

    } else if (category === 'TEMPORARY') {
      return 'Temporário';

    } else if (category === 'EFFECTIVE') {
      return 'Efetivo';

    }

    return '';
  }

}
