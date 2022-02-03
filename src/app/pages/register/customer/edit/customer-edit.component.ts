import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { EditComponent } from '@app/@shared/model/structure/edit-component';
import { NbToastrService } from '@nebular/theme';
import { CustomerService } from '../service/customer.service';

@Component({
  templateUrl: './customer-edit.component.html',
})
export class CustomerEditComponent extends EditComponent<Customer> implements OnInit {

  public personType: boolean = true;

  public key(): string {
      return `[customer]`;
  }

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
    this.loadForm();
  }

  public createForm(customer: Customer) {
    this.personType = (customer?.document?.length === 11);

    this.form = new FormGroup({
      id: new FormControl(
        customer.id,
      ),

      name: new FormControl(
        customer.name, [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(100),

      ]),

      document: new FormControl(
        customer.document, [
          Validators.required,
        ]),

        businessName: new FormControl(
          customer.businessName, [
        ]),

        phoneNumber: new FormControl(
          customer.phoneNumber, [
        ]),

        birthDate: new FormControl(
          customer.birthDate, [
        ]),
    });
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
