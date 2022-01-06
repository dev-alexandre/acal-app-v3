import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { DeleteComponent } from '@app/@shared/model/structure/delete-component';
import { NbToastrService } from '@nebular/theme';
import { AddressService } from '../service/address.service';

@Component({
  templateUrl: './address-delete.component.html',
})
export class AddressDeleteComponent extends DeleteComponent<Address> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AddressService,
    public toastrService: NbToastrService,
  ) {
    super(
      router,
      activeRouter,
      service,
      toastrService,
    );
  }

  ngOnInit(): void {
    super.load();
  }

  public key(): string {
      return `[address]`;
  }

}
