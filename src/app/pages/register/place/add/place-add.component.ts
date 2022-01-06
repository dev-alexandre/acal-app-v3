import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { Place } from '@app/@shared/model/place/place.model';
import { AddComponent } from '@app/@shared/model/structure/add-component';
import { NbToastrService } from '@nebular/theme';
import { AddressService } from '../../address/service/address.service';
import { PlaceService } from '../service/place.service';

@Component({
  templateUrl: './place-add.component.html',
})
export class PlaceAddComponent extends AddComponent<Place> implements OnInit {

  public addresses: Address[];

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: PlaceService,
    public addressService: AddressService,
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
    this.loadAdress();
  }

  public createForm() {

    this.form = new FormGroup({
      letter: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
      ]),

      number: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
      ]),

      address: new FormControl(
        null, [
        Validators.required,
      ]),

    });
  }

  public loadAdress(): void {
    this.addressService.list().subscribe(
      (addresses) => {
        this.addresses = addresses;
      });
  }

  public get letter() {
    return this.form.get('letter');
  }

  public get number() {
    return this.form.get('number');
  }

  public get address() {
    return this.form.get('address');
  }


}
