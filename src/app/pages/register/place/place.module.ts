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
import { PlaceRoutingModule } from './place-routing.module';
import { PlaceService } from './service/place.service';
import { PlaceAddComponent } from './add/place-add.component';
import { PlaceDeleteComponent } from './delete/place-delete.component';
import { PlaceEditComponent } from './edit/place-edit.component';
import { PlaceListComponent } from './list/place-list.component';
import { PlaceComponent } from './place.component';
import { AddressService } from '../address/service/address.service';
import { NgxMaskModule } from 'ngx-mask';
import { PipeModule } from '@app/@shared/pipe/pipe.module';


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

    PipeModule,
    PlaceRoutingModule,
    NgxMaskModule.forChild(),
  ],

  declarations: [
    PlaceComponent,
    PlaceAddComponent,
    PlaceEditComponent,
    PlaceDeleteComponent,
    PlaceListComponent,
  ],

  providers: [
    PlaceService,
    AddressService,
  ],

})
export class PlaceModule { }
