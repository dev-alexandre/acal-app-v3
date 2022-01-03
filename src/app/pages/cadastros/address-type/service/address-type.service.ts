import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Service } from '@app/@shared/model/structure/service';
import { environment } from '@env/environment';

@Injectable()
export class AddressTypeService extends Service<AddressType> {

  getUrl(): string {
    return `${environment.apiUrl}/address-type`;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
