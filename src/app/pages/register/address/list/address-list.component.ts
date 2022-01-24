import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Address } from '@app/@shared/model/address/address.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { Filter } from '@app/@shared/model/table/table-model';
import { AddressTypeService } from '../../address-type/service/address-type.service';
import { AddressService } from '../service/address.service';

@Component({
  templateUrl: './address-list.component.html',
})
export class AddressListComponent extends ListComponent<Address> implements OnInit {

  public addressTypes: AddressType[];
  public filter: Filter<Address>;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AddressService,
    public addressTypeService: AddressTypeService,
    ) {
      super(
        router,
        activeRouter,
        service,
      );
  }

  ngOnInit(): void {
    this.seach();
  }

  public initModel(filter: Filter<Address>): void {
    filter.model = {
      addressType: {},
    };
  }

  key(): string {
    return `[address]`;
  }

  setAddressType(addressType: AddressType): void {
    this.filter.model.addressType = addressType;
    this.seach();
  }
}
