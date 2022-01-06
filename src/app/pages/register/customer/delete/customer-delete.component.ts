import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { DeleteComponent } from '@app/@shared/model/structure/delete-component';
import { NbToastrService } from '@nebular/theme';
import { CustomerService } from '../service/customer.service';

@Component({
  templateUrl: './customer-delete.component.html',
})
export class CustomerDeleteComponent extends DeleteComponent<Customer> implements OnInit {

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
    super.load();
  }

  public key(): string {
      return `[customer]`;
  }

}
