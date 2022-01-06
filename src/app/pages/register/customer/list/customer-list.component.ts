import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { Filter } from '@app/@shared/model/table/table-model';
import { CustomerService } from '../service/customer.service';

@Component({
  templateUrl: './customer-list.component.html',
})
export class CustomerListComponent extends ListComponent<Customer> implements OnInit {

  public filter: Filter<Customer>;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: CustomerService,
    ) {
      super(
        router,
        activeRouter,
        service,
      );
  }

  ngOnInit(): void {
    this.seach();
  }

  public initModel(filter: Filter<Customer>): void {
    filter.model = {};
  }

  key(): string {
    return `[address]`;
  }

}
