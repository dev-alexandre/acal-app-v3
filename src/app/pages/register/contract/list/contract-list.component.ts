import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { Contract } from '@app/@shared/model/contract/contract.model';
import { Place } from '@app/@shared/model/place/place.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { Filter } from '@app/@shared/model/table/table-model';
import { ContractService } from '../service/contract.service';

@Component({
  templateUrl: './contract-list.component.html',
})
export class ContractListComponent extends ListComponent<Contract> implements OnInit {

  public filter: Filter<Contract>;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContractService,
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

  public initModel(filter: Filter<Contract>): void {
    filter.model = {
      customer: {},
      placeResidence: {},
      group: {},
    };
  }

  setRowsSize(size: number): void {
    this.filter.page.size = size;
    this.seach();
  }

  setAddress(address: Address): void {

    if (address) {
      this.filter.model.placeResidence = {
        address: address,
      };
    } else {
      this.filter.model.placeResidence = {};
    }

    this.seach();
  }

  setPlace(place: Place) {
    this.filter.model.placeResidence = place;
    this.seach();
  }

  key(): string {
    return `[contract]`;
  }

}
