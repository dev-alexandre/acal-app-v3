import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { Category } from '@app/@shared/model/category/category.model';
import { Group } from '@app/@shared/model/group/group.model';
import { Place } from '@app/@shared/model/place/place.model';
import { ListComponent } from '@app/@shared/model/structure/list-component';
import { Filter } from '@app/@shared/model/table/table-model';
import { GroupService } from '../service/group.service';

@Component({
  templateUrl: './group-list.component.html',
})
export class GroupListComponent extends ListComponent<Group> implements OnInit {

  public filter: Filter<Group>;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GroupService,
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

  public initModel(filter: Filter<Place>): void {
    filter.model = {};
  }

  setRowsSize(rowSize: number): void {
    this.filter.page.size = rowSize;
    this.seach();
  }

  setCategory(category: Category): void {
    this.filter.model.category = category;
    this.seach();
  }

  key(): string {
    return `[group]`;
  }

}
