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
    this.form = new FormGroup({

      id: new FormControl(
        customer.id, [
        Validators.required,
      ]),

      name: new FormControl(
        customer.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      createdAt: new FormControl(
        customer.createdAt, [
        Validators.required,
      ]),

    });
  }

  public get name() {
    return this.form.get('name');
  }

}
