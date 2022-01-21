import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Group } from '@app/@shared/model/group/group.model';
import { Service } from '@app/@shared/model/structure/service';
import { environment } from '@env/environment';

@Injectable()
export class GroupService extends Service<Group> {

  getUrl(): string {
    return `${environment.apiUrl}/group`;
  }

  constructor(public http: HttpClient) {
    super(http);
  }

}
