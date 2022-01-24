import { NgModule } from '@angular/core';
import {
  NbAutocompleteModule,
  NbInputModule,
  NbCardModule,
  NbDialogModule,
  NbButtonModule,
  NbFormFieldModule,
  NbIconModule,
  NbSelectModule} from '@nebular/theme';
import { CommonModule } from '@angular/common';
import { CustomerService } from '../pages/register/customer/service/customer.service';
import { PlaceService } from '@app/pages/register/place/service/place.service';
import { PipeModule } from '../@shared/pipe/pipe.module';
import { GroupService } from '@app/pages/register/group/service/group.service';
import { AddressTypeService } from '@app/pages/register/address-type/service/address-type.service';
import { AutoCompleteAddressTypeComponent } from './auto-complete/auto-complete-address-type/auto-complete-address-type.component';
import { AutoCompleteCustomerComponent } from './auto-complete/auto-complete-customer/auto-complete-customer.component';
import { AutoCompleteGroupComponent } from './auto-complete/auto-complete-group/auto-complete-group.component';
import { AutoCompletePlaceComponent } from './auto-complete/auto-complete-place/auto-complete-place.component';
import { SelectAddressTypeComponent } from './select/select-address-type/select-address-type.component';
import { FormsModule } from '../pages/forms/forms.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SelectAddressComponent } from './select/select-address/select-address.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,

    NbCardModule,
    NbInputModule,
    NbSelectModule,
    NbButtonModule,
    NbAutocompleteModule,
    NbFormFieldModule,
    NbIconModule,
    NbDialogModule.forChild(),

    PipeModule,
  ],

  declarations: [
    AutoCompleteCustomerComponent,
    AutoCompletePlaceComponent,
    AutoCompleteGroupComponent,
    AutoCompleteAddressTypeComponent,

    SelectAddressTypeComponent,
    SelectAddressComponent,
  ],

  exports: [
    AutoCompleteCustomerComponent,
    AutoCompletePlaceComponent,
    AutoCompleteGroupComponent,
    AutoCompleteAddressTypeComponent,

    SelectAddressTypeComponent,
    SelectAddressComponent,
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
