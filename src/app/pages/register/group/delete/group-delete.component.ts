import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '@app/@shared/model/group/group.model';
import { DeleteComponent } from '@app/@shared/model/structure/delete-component';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../service/group.service';

@Component({
  templateUrl: './group-delete.component.html',
})
export class GroupDeleteComponent extends DeleteComponent<Group> implements OnInit {

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: GroupService,
    public toastrService: NbToastrService,
  ) {
    super(
      router,
      activeRouter,
      service,
      toastrService,
    );
  }

  ngOnInit(): void {
    super.load();
  }

  public key(): string {
      return `[group]`;
  }

}
