import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contract } from '@app/@shared/model/contract/contract.model';
import { Service } from '@app/@shared/model/structure/service';
import { environment } from '@env/environment';

@Injectable()
export class ContractService extends Service<Contract> {

  getUrl(): string {
    return `${environment.apiUrl}/contract`;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
