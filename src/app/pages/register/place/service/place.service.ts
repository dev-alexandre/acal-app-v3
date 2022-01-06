import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '@app/@shared/model/place/place.model';
import { Service } from '@app/@shared/model/structure/service';
import { environment } from '@env/environment';

@Injectable()
export class PlaceService extends Service<Place> {

  getUrl(): string {
    return `${environment.apiUrl}/place`;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
