import { NgModule } from '@angular/core';
import { AddressTypeComponent } from './address-type.component';
import {
  NbButtonGroupModule,
   NbButtonModule,
   NbCardModule,
   NbIconModule,
   NbInputModule,
   NbSelectModule,
   NbSpinnerModule } from '@nebular/theme';
import { AddressTypeService } from './service/address-type.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddressTypeAddComponent } from './add/address-type-add.component';
import { AddressTypeDeleteComponent } from './delete/address-type-delete.component';
import { AddressTypeEditComponent } from './edit/address-type-edit.component';
import { AddressTypeListComponent } from './list/address-type-list.component';
import { AddressTypeRoutingModule } from './address-type-routing.module';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({

  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbSelectModule,
    NbButtonGroupModule,
    NbSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AddressTypeRoutingModule,
    NgxMaskModule.forChild(),
  ],

  declarations: [
    AddressTypeComponent,
    AddressTypeAddComponent,
    AddressTypeEditComponent,
    AddressTypeDeleteComponent,
    AddressTypeListComponent,
  ],

  providers: [
    AddressTypeService,
  ],

})
export class AddressTypeModule {

}
