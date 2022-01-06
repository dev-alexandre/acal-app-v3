import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressPipe } from './address.pipe';
import { PartnerPipe } from './patner.pipe';
import { DocumentPipe } from './document.pipe';


@NgModule({

  declarations: [
    AddressPipe,
    PartnerPipe,
    DocumentPipe,
  ],

  exports: [
    AddressPipe,
    PartnerPipe,
    DocumentPipe,
  ],

  imports: [
    CommonModule,
  ],

  providers: [
    AddressPipe,
  ],

})
export class PipeModule { }
