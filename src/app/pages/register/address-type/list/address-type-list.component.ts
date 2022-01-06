import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { Filter } from '@app/@shared/model/table/table-model';
import { AddressTypeService } from '../service/address-type.service';

@Component({
  templateUrl: './address-type-list.component.html',
})
export class AddressTypeListComponent extends ListComponent<AddressType> implements OnInit {

  initModel(filter: Filter<AddressType>): void {
    this.filter.model = {};
  }

  key(): string {
    return `[address-type]`;
  }

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AddressTypeService,
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

}
