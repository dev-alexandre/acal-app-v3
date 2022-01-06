import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { DeleteComponent } from '@app/@shared/model/structure/delete-component';
import { NbToastrService } from '@nebular/theme';
import { AddressTypeService } from '../service/address-type.service';

@Component({
  templateUrl: './address-type-delete.component.html',
})
export class AddressTypeDeleteComponent extends DeleteComponent<AddressType> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AddressTypeService,
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
      return `[address-type]`;
  }

}
