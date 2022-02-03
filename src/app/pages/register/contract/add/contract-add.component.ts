import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '@app/@shared/model/contract/contract.model';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { Group } from '@app/@shared/model/group/group.model';
import { Place } from '@app/@shared/model/place/place.model';
import { AddComponent } from '@app/@shared/model/structure/add-component';
import { NbToastrService } from '@nebular/theme';
import { ContractService } from '../service/contract.service';

@Component({
  templateUrl: './contract-add.component.html',
})
export class ContractAddComponent extends AddComponent<Contract> implements OnInit {

  public hasCustomer: boolean = false;
  public hasBusinessName: boolean = false;
  public hasplaceResidence: boolean = false;
  public hasplaceAddress: boolean = false;
  public hasGroup: boolean = false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContractService,
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

      nameBusiness: new FormControl(
        null, [
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      customer: new FormControl(
        null, [
        Validators.required,
      ]),

      placeResidence: new FormControl(
        null, [
        Validators.required,
      ]),

      placeMail: new FormControl(
        null, [
        Validators.required,
      ]),

      group: new FormControl(
        null, [
        Validators.required,
      ]),

    });
  }

  public setCustomer(customer: Customer): void {
    this.customer.setValue(customer);
    this.hasCustomer = (customer != null);
  }

  public setPlaceResidence(place: Place): void {
    this.placeResidence.setValue(place);
  }

  public setPlaceMail(place: Place): void {
    this.placeMail.setValue(place);
  }

  public setGroup(group: Group): void {
    this.group.setValue(group);
  }

  public get name() {
    return this.form.get('name');
  }

  public get customer() {
    return this.form.get('customer');
  }

  public get group() {
    return this.form.get('group');
  }

  public get placeResidence() {
    return this.form.get('placeResidence');
  }

  public get placeMail() {
    return this.form.get('placeMail');
  }

  public get nameBusiness() {
    return this.form.get('nameBusiness');
  }

}
