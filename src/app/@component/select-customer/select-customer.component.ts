import { ChangeDetectionStrategy, Component, ViewChild, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { CustomerService } from '../../pages/register/customer/service/customer.service';
import { SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-select-customer',
  templateUrl: './select-customer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCustomerComponent extends SelectComponent<Customer> {

  @Input()
  public status: String = 'basic';

  @Output()
  private setValue = new EventEmitter();

  @ViewChild('autoInput')
  public input: any;

  constructor(public service: CustomerService) {
    super(service);
  }

  getEmiter(): EventEmitter<Customer> {
    return this.setValue;
  }

  public get inputtedValue(): string {
    return this.input.nativeElement.value;
  }

  public set inputtedValue(value: string) {
    this.input.nativeElement.value = value;
  }

  public get model(): Customer {
    return {name: this.inputtedValue};
  }

}
