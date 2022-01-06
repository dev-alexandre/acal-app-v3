import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Address } from '@app/@shared/model/address/address.model';
import { AddComponent } from '@app/@shared/model/structure/add-component';
import { NbToastrService } from '@nebular/theme';
import { AddressTypeService } from '../../address-type/service/address-type.service';
import { AddressService } from '../service/address.service';

@Component({
  templateUrl: './address-add.component.html',
})
export class AddressAddComponent extends AddComponent<Address> implements OnInit {

  public addressTypes: AddressType[];

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
    this.createForm();
    this.loadAddressType();
  }

  public createForm() {
    this.form = new FormGroup({
      name: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      addressType: new FormControl(
        null, [
        Validators.required,
      ]),

    });
  }

  public loadAddressType(): void {
    this.addressTypeService.list()
      .subscribe(addressTypes => {
        this.addressTypes = addressTypes;
      });
  }

  public get name() {
    return this.form.get('name');
  }

  public get addressType() {
    return this.form.get('addressType');
  }

}
