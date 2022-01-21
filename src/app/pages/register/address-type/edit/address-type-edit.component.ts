import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { EditComponent } from '@app/@shared/model/structure/edit-component';
import { NbToastrService } from '@nebular/theme';
import { AddressTypeService } from '../service/address-type.service';

@Component({
  templateUrl: './address-type-edit.component.html',
})
export class AddressTypeEditComponent extends EditComponent<AddressType> implements OnInit {

  public key(): string {
      return `[address-type]`;
  }

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
    this.loadForm();
  }

  public createForm(addressType: AddressType) {
    this.form = new FormGroup({

      id: new FormControl(
        addressType.id, [
        Validators.required,
      ]),

      name: new FormControl(
        addressType.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),

      createdAt: new FormControl(
        addressType.createdAt, [
        Validators.required,
      ]),

    });
  }

  public get name() {
    return this.form.get('name');
  }
}
