import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { AddComponent } from '@app/@shared/model/structure/add-component';
import { NbToastrService } from '@nebular/theme';
import { CustomerService } from '../service/customer.service';

@Component({
  templateUrl: './customer-add.component.html',
})
export class CustomerAddComponent extends AddComponent<Customer> implements OnInit {

  public personType: boolean = true;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: CustomerService,
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
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      document: new FormControl(
        null, [
        Validators.required,
      ]),

      businessName: new FormControl(
        null, [
      ]),

      phoneNumber: new FormControl(
        null, [
      ]),

      birthDate: new FormControl(
        null, [
      ]),
    });
  }

  public togglePersonType(): void {
    this.personType = !this.personType;

    this.form.get('document').setValue(null);
    this.form.get('businessName').setValue(null);
  }

  public get name() {
    return this.form.get('name');
  }

  public get document() {
    return this.form.get('document');
  }

  public get businessName() {
    return this.form.get('businessName');
  }

  public get phoneNumber() {
    return this.form.get('phoneNumber');
  }

  public get birthDate() {
    return this.form.get('birthDate');
  }

}
