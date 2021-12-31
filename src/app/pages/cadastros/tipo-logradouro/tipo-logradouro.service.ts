import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Filter, Table } from '@app/@shared/model/table/table-model';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';

@Injectable()
export class TipoLogradouroService {

  uri: string = `${environment.apiUrl}/address-type`;

  constructor(public http: HttpClient) {}

  filtar(filtro: Filter): Observable<Table<AddressType>> {
    return this.http.post<Table<AddressType>>(this.uri + `/pageable`, filtro);
  }

  listar(): Observable<AddressType[]> {
    return this.http.get<AddressType[]>(this.uri + `/listar`);
  }

  salvar(addressType: AddressType): Observable<AddressType> {
    return this.http.post<AddressType>(this.uri, addressType);
  }

  deletar(id: number): Observable<AddressType> {
    return this.http.delete(`${this.uri}/${id}`);
  }

}
