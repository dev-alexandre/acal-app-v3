import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  NbCardModule,
  NbButtonModule,
  NbInputModule,
  NbIconModule,
  NbSelectModule,
  NbButtonGroupModule,
  NbSpinnerModule,
  NbStepperModule} from '@nebular/theme';
import { NgxMaskModule } from 'ngx-mask';
import { ContractAddComponent } from './add/contract-add.component';
import { ContractRoutingModule } from './contract-routing.module';
import { ContractComponent } from './contract.component';
import { ContractDeleteComponent } from './delete/contract-delete.component';
import { ContractEditComponent } from './edit/contract-edit.component';
import { ContractListComponent } from './list/contract-list.component';
import { ContractService } from './service/contract.service';
import { ComponentModule } from '@app/@component/component.module';
import { PipeModule } from '@app/@shared/pipe/pipe.module';
import { AddressService } from '../address/service/address.service';


@NgModule({

  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,

    PipeModule,
    NbSelectModule,
    NbButtonGroupModule,
    NbSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ContractRoutingModule,

    NbStepperModule,
    ComponentModule,
    NgxMaskModule.forChild(),
  ],

  declarations: [
    ContractComponent,
    ContractAddComponent,
    ContractEditComponent,
    ContractDeleteComponent,
    ContractListComponent,
  ],

  providers: [
    ContractService,
    AddressService,
  ],

})
export class ContractModule { }
