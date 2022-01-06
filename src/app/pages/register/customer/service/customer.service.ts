import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Customer } from '@app/@shared/model/customer/customer.model';
import { Service } from '@app/@shared/model/structure/service';
import { environment } from '@env/environment';

@Injectable()
export class CustomerService extends Service<Customer> {

  getUrl(): string {
    return `${environment.apiUrl}/customer`;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
