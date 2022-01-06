import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Address } from '@app/@shared/model/address/address.model';
import { Group } from '@app/@shared/model/group/group.model';
import { EditComponent } from '@app/@shared/model/structure/edit-component';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../service/group.service';

@Component({
  templateUrl: './group-edit.component.html',
})
export class GroupEditComponent extends EditComponent<Group> implements OnInit {

  public addresses: Address[];
  public loadedAddresses: boolean = false;

  public key(): string {
      return `[group]`;
  }

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
    this.loadForm();
  }

  public createForm() {

    this.form = new FormGroup({
      category: new FormControl(
        this.data.category, [
        Validators.required,
      ]),

      name: new FormControl(
        this.data.name, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),

      monetaryValue: new FormControl(
        this.data.monetaryValue, [
        Validators.required,
      ]),

      createdAt: new FormControl(
        this.data.createdAt, [
        Validators.required,
      ]),

    });
  }

  public get category() {
    return this.form.get('category');
  }

  public get name() {
    return this.form.get('name');
  }

  public get monetaryValue() {
    return this.form.get('monetaryValue');
  }


}
