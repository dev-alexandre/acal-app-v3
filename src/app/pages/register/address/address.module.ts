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
  NbSpinnerModule } from '@nebular/theme';
import { AddressService } from './service/address.service';
import { AddressListComponent } from './list/address-list.component';
import { AddressComponent } from './address.component';
import { AddressRoutingModule } from './address-routing.module';
import { AddressAddComponent } from './add/address-add.component';
import { AddressDeleteComponent } from './delete/address-delete.component';
import { AddressEditComponent } from './edit/address-edit.component';
import { AddressTypeService } from '../address-type/service/address-type.service';
import { NgxMaskModule } from 'ngx-mask';
import { ComponentModule } from '@app/@component/component.module';


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
    AddressRoutingModule,

    ComponentModule,
    NgxMaskModule.forChild(),
  ],

  declarations: [
    AddressComponent,
    AddressAddComponent,
    AddressEditComponent,
    AddressDeleteComponent,
    AddressListComponent,
  ],

  providers: [
    AddressService,
    AddressTypeService,
  ],

})
export class AddressModule { }
