import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPipe } from './address/address.pipe';
import { DocumentPipe } from './document/document.pipe';
import { PartnerPipe } from './partner/patner.pipe';
import { PlacePipe } from './place/place.pipe';
import { GroupPipe } from './group/patner.pipe';
import { CustomerPipe } from './customer/customer.pipe';
import { ContractNumberPipe } from './contract-number/contract-number.pipe';


@NgModule({

  imports: [
    CommonModule,
  ],

  declarations: [
    AddressPipe,
    PartnerPipe,
    DocumentPipe,
    PlacePipe,
    GroupPipe,
    CustomerPipe,
    ContractNumberPipe,
  ],

  exports: [
    AddressPipe,
    PartnerPipe,
    DocumentPipe,
    PlacePipe,
    GroupPipe,
    CustomerPipe,
    ContractNumberPipe,
  ],

  providers: [
    AddressPipe,
    GroupPipe,
  ],

})
export class PipeModule { }
