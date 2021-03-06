import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Filter } from '@app/@shared/model/table/table-model';
import { AddressTypeService } from '@app/pages/register/address-type/service/address-type.service';

@Component({
  selector: 'app-select-address-type',
  templateUrl: './select-address-type.component.html',
})
export class SelectAddressTypeComponent {

  @Input()
  public form: FormControl;

  @Input()
  public submitted: boolean = false;

  @Input()
  public showTile: boolean = true;

  @Input()
  public selected: AddressType = null;

  @Output()
  private setValue = new EventEmitter();

  @Output()
  private setNameOnly = new EventEmitter();

  public loaded: boolean = false;
  public options: AddressType[] = [];
  public filter: Filter<AddressType>;

  constructor(public service: AddressTypeService)  {

    this.filter = {
      page: {size: 10, number: 0},
      sort: {value: 'name', asc: true},
      model: {name: '', deleted: false },
    };

    this.init();
  }



  init (): void {
    this.service.list().subscribe(
      (options) => {
        this.options = options.sort((a, b) => a.name > b.name ? 1 : -1);

        const names = options.map(o => o.name);
        this.options = options.filter(({name}, index) => !names.includes(name, index + 1));
        this.loaded = true;
      });
  }

  onSelectionChange() {
    this.setValue.emit(this.selected);
    this.setNameOnly.emit({name: this.selected?.name});
  }

  compareById(v1, v2): boolean {
    return v1?.id === v2?.id;
  }
}
