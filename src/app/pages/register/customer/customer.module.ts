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
  NbFormFieldModule} from '@nebular/theme';
import { CustomerAddComponent } from './add/customer-add.component';
import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerComponent } from './customer.component';
import { CustomerDeleteComponent } from './delete/customer-delete.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerListComponent } from './list/customer-list.component';
import { CustomerService } from './service/customer.service';
import { NgxMaskModule } from 'ngx-mask';
import { PipeModule } from '@app/@shared/pipe/pipe.module';
import { ComponentModule } from '../../../@component/component.module';

@NgModule({

  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbFormFieldModule,

    NbSelectModule,
    NbButtonGroupModule,
    NbSpinnerModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CustomerRoutingModule,
    NgxMaskModule.forChild(),
    ComponentModule,
    PipeModule,
  ],

  declarations: [
    CustomerComponent,
    CustomerAddComponent,
    CustomerEditComponent,
    CustomerDeleteComponent,
    CustomerListComponent,
  ],

  providers: [
    CustomerService,
  ],

})
export class CustomerModule { }
