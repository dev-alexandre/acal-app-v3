import { NgModule } from '@angular/core';
import { SelectCustomerComponent } from './select-customer/select-customer.component';
import {
  NbAutocompleteModule,
  NbInputModule,
  NbCardModule,
  NbDialogModule,
  NbButtonModule,
  NbFormFieldModule,
  NbIconModule } from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../pages/register/customer/service/customer.service';
import { SelectPlaceComponent } from './select-place/select-place.component';
import { PlaceService } from '@app/pages/register/place/service/place.service';
import { PipeModule } from '../@shared/pipe/pipe.module';
import { SelectGroupComponent } from './select-group/select-group.component';
import { GroupService } from '@app/pages/register/group/service/group.service';
import { AddressTypeService } from '@app/pages/register/address-type/service/address-type.service';
import { SelectAddressTypeComponent } from './select-address-type/select-address-type.component';

@NgModule({
  imports: [
    PipeModule,
    NbCardModule,
    NbInputModule,
    NbButtonModule,
    CommonModule,
    NbAutocompleteModule,
    NbFormFieldModule,
    NbIconModule,
    NbDialogModule.forChild(),
  ],

  declarations: [
    SelectCustomerComponent,
    SelectPlaceComponent,
    SelectGroupComponent,
    SelectAddressTypeComponent,
  ],

  exports: [
    SelectCustomerComponent,
    SelectPlaceComponent,
    SelectGroupComponent,
    SelectAddressTypeComponent,
  ],

  providers: [
    CustomerService,
    PlaceService,
    GroupService,
    AddressTypeService,
  ],
})
export class ComponentModule {

}
