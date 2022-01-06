import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { Place } from '@app/@shared/model/place/place.model';
import { EditComponent } from '@app/@shared/model/structure/edit-component';
import { NbToastrService } from '@nebular/theme';
import { AddressService } from '../../address/service/address.service';
import { PlaceService } from '../service/place.service';

@Component({
  templateUrl: './place-edit.component.html',
})
export class PlaceEditComponent extends EditComponent<Place> implements OnInit {

  public addresses: Address[];
  public loadedAddresses: boolean = false;

  public key(): string {
      return `[place]`;
  }

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
    this.loadForm();
    this.loadAdress();
  }

  public loadAdress(): void {
    this.addressService.list().subscribe(
      (addresses) => {
        this.addresses = addresses;
        this.loadedAddresses = true;
      });
  }


  public createForm(place: Place) {
    this.form = new FormGroup({

      id: new FormControl(
        place.id, [
        Validators.required,
      ]),

      name: new FormControl(
        place.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      letter: new FormControl(
        place.letter, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
      ]),

      number: new FormControl(
        place.number, [
        Validators.required,
        Validators.minLength(1),
        Validators.maxLength(3),
      ]),

      address: new FormControl(
        place.address, [
        Validators.required,
      ]),

      createdAt: new FormControl(
        place.createdAt, [
        Validators.required,
      ]),

    });
  }

  public get name() {
    return this.form.get('name');
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
