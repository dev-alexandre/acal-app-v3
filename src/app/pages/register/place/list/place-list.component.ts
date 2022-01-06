import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { Place } from '@app/@shared/model/place/place.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { Filter } from '@app/@shared/model/table/table-model';
import { AddressService } from '../../address/service/address.service';
import { PlaceService } from '../service/place.service';

@Component({
  templateUrl: './place-list.component.html',
})
export class PlaceListComponent extends ListComponent<Place> implements OnInit {

  public filter: Filter<Place>;
  public addresses: Address[];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: PlaceService,
    public addressService: AddressService,
    ) {
      super(
        router,
        activeRouter,
        service,
      );
  }

  ngOnInit(): void {
    this.seach();
    this.loadAdress();
  }

  public initModel(filter: Filter<Place>): void {
    filter.model = {};
    filter.model.address = {
      addressType : {},
    };
  }

  public loadAdress(): void {
    this.addressService.list().subscribe(
      (addresses) => {
        this.addresses = addresses;
      });
  }

  key(): string {
    return `[place]`;
  }

}
