import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '@app/@shared/model/contract/contract.model';
import { EditComponent } from '@app/@shared/model/structure/edit-component';
import { NbToastrService } from '@nebular/theme';
import { ContractService } from '../service/contract.service';

@Component({
  templateUrl: './contract-edit.component.html',
})
export class ContractEditComponent extends EditComponent<Contract> implements OnInit {

  public key(): string {
      return `[contract]`;
  }

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: ContractService,
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

  public createForm(contract: Contract) {
    this.form = new FormGroup({

      id: new FormControl(
        contract.id, [
        Validators.required,
      ]),

      name: new FormControl(
        contract.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(100),
      ]),

      createdAt: new FormControl(
        contract.createdAt, [
        Validators.required,
      ]),

    });
  }

  public get name() {
    return this.form.get('name');
  }

}
