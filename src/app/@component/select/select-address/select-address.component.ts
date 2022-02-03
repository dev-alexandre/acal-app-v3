import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
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

  @Input()
  public form: FormControl;

  @Input()
  public submitted: boolean = false;

  @Input()
  public showTitle: boolean = true;

  @Input()
  public selected: Address = null;

  @Output()
  private setValue = new EventEmitter();

  public options: Address[] = [];
  public allOptions: Options[] = [];
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

    const allAddressType: String[] = [];

    options.forEach( op => {
      if (!allAddressType.some( aat => aat === op.addressType.name)) {
        allAddressType.push(op.addressType.name);
        this.allOptions.push(
          {
            name: op.addressType.name,
            groups: options.filter(lop => lop.addressType.id === op.addressType.id),
          },
        );
      }
    });

      this.allOptions.sort((a, b) => a.name > b.name ? 1 : -1);
      this.allOptions.forEach(option => {
        option
          .groups
            .sort((a, b) => a.addressType.name > b.addressType.name ? 1 : -1)
            .sort((a, b) => a.name > b.name ? 1 : -1)
          ;
      });
  }

}
