import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AddressTypeService } from '@app/pages/register/address-type/service/address-type.service';
import { GroupService } from '@app/pages/register/group/service/group.service';
import { PlaceService } from '@app/pages/register/place/service/place.service';
import {
  NbAutocompleteModule, NbButtonModule, NbCardModule,
  NbDialogModule, NbFormFieldModule,
  NbIconModule, NbInputModule, NbSelectModule,
} from '@nebular/theme';
import { PipeModule } from '../@shared/pipe/pipe.module';
import { FormsModule } from '../pages/forms/forms.module';
import { CustomerService } from '../pages/register/customer/service/customer.service';
import { AutoCompleteAddressTypeComponent } from './auto-complete/auto-complete-address-type/auto-complete-address-type.component';
import { AutoCompleteCustomerComponent } from './auto-complete/auto-complete-customer/auto-complete-customer.component';
import { AutoCompleteGroupComponent } from './auto-complete/auto-complete-group/auto-complete-group.component';
import { AutoCompletePlaceComponent } from './auto-complete/auto-complete-place/auto-complete-place.component';
import { SelectAddressTypeComponent } from './select/select-address-type/select-address-type.component';
import { SelectAddressComponent } from './select/select-address/select-address.component';
import { SelectCategoryComponent } from './select/select-category/select-category.component';
import { SelectRowsNumberComponent } from './select/select-rows-number/select-rows-number.component';
import { AppTableComponent } from './table/app-table/app-table.component';

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
    SelectCategoryComponent,
    SelectRowsNumberComponent,
    AppTableComponent,
  ],

  exports: [
    AutoCompleteCustomerComponent,
    AutoCompletePlaceComponent,
    AutoCompleteGroupComponent,
    AutoCompleteAddressTypeComponent,

    SelectAddressTypeComponent,
    SelectAddressComponent,
    SelectCategoryComponent,
    SelectRowsNumberComponent,
    AppTableComponent,
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
