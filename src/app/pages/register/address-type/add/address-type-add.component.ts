import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { AddComponent } from '@app/@shared/model/structure/add-component';
import { NbToastrService } from '@nebular/theme';
import { AddressTypeService } from '../service/address-type.service';

@Component({
  templateUrl: './address-type-add.component.html',
})
export class AddressTypeAddComponent extends AddComponent<AddressType> implements OnInit {

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
    this.createForm();
  }

  public createForm() {
    this.form = new FormGroup({
      name: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),
    });
  }

  public get name() {
    return this.form.get('name');
  }

}
