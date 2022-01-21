import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contract } from '@app/@shared/model/contract/contract.model';
import { DeleteComponent } from '@app/@shared/model/structure/delete-component';
import { NbToastrService } from '@nebular/theme';
import { ContractService } from '../service/contract.service';

@Component({
  templateUrl: './contract-delete.component.html',
})
export class ContractDeleteComponent extends DeleteComponent<Contract> implements OnInit {

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
    super.load();
  }

  public key(): string {
      return `[contract]`;
  }

}
