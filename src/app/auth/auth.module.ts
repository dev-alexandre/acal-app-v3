import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { NgxAuthRoutingModule } from './auth-routing.module';
import { NbAuthModule } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import {
  NbAlertModule,
  NbButtonModule,
  NbCheckboxModule,
  NbInputModule,
} from '@nebular/theme';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    NbAlertModule,
    NbInputModule,
    NbButtonModule,
    NbCheckboxModule,
    NgxAuthRoutingModule,

    NbAuthModule,
  ],
  declarations: [
    LoginComponent,
  ],
})
export class NgxAuthModule {
}
