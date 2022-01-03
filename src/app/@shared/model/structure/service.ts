import { HttpClient } from '@angular/common/http';
import { Filter, Table } from '@app/@shared/model/table/table-model';
import { Observable } from 'rxjs';
import { AbstractModel } from '../abstract-model';

export abstract class Service<T extends AbstractModel> {

  abstract getUrl(): string;

  constructor(public http: HttpClient) {}

  filter(filtro: Filter<any>): Observable<Table<T>> {
    return this.http.post<Table<T>>(`${this.getUrl()}/pageable`, filtro);
  }

  list(): Observable<T[]> {
    return this.http.get<T[]>(`${this.getUrl()}`);
  }

  save(t: T): Observable<T> {
    return this.http.post<T>(this.getUrl(), t);
  }

  delete(id: number) {
    return this.http.delete(`${this.getUrl()}/${id}`);
  }

}
