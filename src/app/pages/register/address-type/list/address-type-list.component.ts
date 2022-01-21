import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { AddressTypeService } from '../service/address-type.service';

@Component({
  templateUrl: './address-type-list.component.html',
})
export class AddressTypeListComponent extends ListComponent<AddressType> implements OnInit {

  initModel(): void {
    this.filter.model = {
      deletedAt: null,
    };
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
