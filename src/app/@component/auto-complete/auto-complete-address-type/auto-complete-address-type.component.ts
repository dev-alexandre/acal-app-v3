import { ChangeDetectionStrategy, Component, ViewChild, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Group } from '@app/@shared/model/group/group.model';
import { Filter } from '@app/@shared/model/table/table-model';
import { AddressTypeService } from '@app/pages/register/address-type/service/address-type.service';
import { AllOptions, AutoCompleteComponent } from '../auto-complete.component';

export interface Options {
  name: String;
  groups: AddressType[];
}

@Component({
  selector: 'app-auto-complete-address-type',
  templateUrl: './auto-complete-address-type.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteAddressTypeComponent extends AutoCompleteComponent<AddressType> {

  @Input()
  public status: String = 'basic';

  @Output()
  private setValue = new EventEmitter();

  @ViewChild('autoInput')
  public input: any;

  constructor(public service: AddressTypeService) {
    super(service);
  }

  public options: AddressType[];
  public allOptions: AllOptions<AddressType>[];
  public filter: Filter<AddressType>;
  public selected: Group;


  getEmiter(): EventEmitter<Group> {
    return this.setValue;
  }

  public get inputtedValue(): string {
    return this.input.nativeElement.value;
  }

  public set inputtedValue(value: string) {
    this.input.nativeElement.value = value;
  }

  public get model(): Group {
    return {name: this.inputtedValue};
  }

}
