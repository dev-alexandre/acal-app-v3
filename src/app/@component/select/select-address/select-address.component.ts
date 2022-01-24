import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Address } from '@app/@shared/model/address/address.model';
import { Filter } from '@app/@shared/model/table/table-model';
import { AddressService } from '@app/pages/register/address/service/address.service';

export interface Options {
  name: String;
  groups: Address[];
}

@Component({
  selector: 'app-select-address',
  templateUrl: './select-address.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectAddressComponent  {

  @Output()
  private setValue = new EventEmitter();

  public options: Address[] = [];
  public allOptions: Options[] = [];
  public selected: Address = null;
  public filter: Filter<Address>;

  constructor(public service: AddressService) {

    this.filter = {
      page: {size: 10, number: 0},
      sort: {value: 'name', asc: true},
      model: {name: '' },
    };

    this.init();
  }

  init (): void {
    this.service.list().subscribe(
      (options) => {
        this.initOptions(options);
      });
  }

  onSelectionChange() {
    this.setValue.emit(this.selected);
  }

  initOptions(options: Address[]): void {

    const allAddressType: AddressType[] = [];

    options.forEach( op => {
      if (!allAddressType.some( at => at.id === op.id)) {
        this.allOptions.push(
          {
            name: op.addressType.name,
            groups: options.filter(lop => lop.addressType.id === op.addressType.id),
          },
        );
      }
    });



  }

}
