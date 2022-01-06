import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Group } from '@app/@shared/model/group/group.model';
import { AddComponent } from '@app/@shared/model/structure/add-component';
import { NbToastrService } from '@nebular/theme';
import { GroupService } from '../service/group.service';

@Component({
  templateUrl: './group-add.component.html',
})
export class GroupAddComponent extends AddComponent<Group> implements OnInit {

  public groups: Group[];

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
    this.createForm();
  }

  public createForm() {

    this.form = new FormGroup({
      category: new FormControl(
        null, [
        Validators.required,
      ]),

      name: new FormControl(
        null, [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(100),
      ]),

      monetaryValue: new FormControl(
        null, [
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
