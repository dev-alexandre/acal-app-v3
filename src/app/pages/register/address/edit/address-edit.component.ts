import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Address } from '@app/@shared/model/address/address.model';
import { EditComponent } from '@app/@shared/model/structure/edit-component';
import { NbToastrService } from '@nebular/theme';
import { AddressTypeService } from '../../address-type/service/address-type.service';
import { AddressService } from '../service/address.service';

@Component({
  templateUrl: './address-edit.component.html',
})
export class AddressEditComponent extends EditComponent<Address> implements OnInit {

  public addressTypes: AddressType[];
  public loadedAddressType: boolean = false;

  public key(): string {
      return `[address]`;
  }

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: AddressService,
    public addressTypeService: AddressTypeService,
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
    this.loadForm();
    this.loadAddressType();
  }

  public loadAddressType(): void {

    this.addressTypeService.list()
      .subscribe(addressTypes => {
        this.addressTypes = addressTypes;
        this.loadedAddressType = true;
      });

  }

  public createForm(address: Address) {
    this.form = new FormGroup({

      id: new FormControl(
        address.id, [
        Validators.required,
      ]),

      name: new FormControl(
        address.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      addressType: new FormControl(
        address.addressType, [
        Validators.required,
      ]),

      createdAt: new FormControl(
        address.createdAt, [
        Validators.required,
      ]),

    });
  }

  public get name() {
    return this.form.get('name');
  }

  public get addressType() {
    return this.form.get('addressType');
  }

}
