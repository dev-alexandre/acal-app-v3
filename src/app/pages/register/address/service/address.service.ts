import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Address } from '@app/@shared/model/address/address.model';
import { Service } from '@app/@shared/model/structure/service';
import { environment } from '@env/environment';

@Injectable()
export class AddressService extends Service<Address> {

  getUrl(): string {
    return `${environment.apiUrl}/address`;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
