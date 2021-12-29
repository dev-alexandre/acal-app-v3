import { NgModule } from '@angular/core';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroRoutingModule } from './tipo-logradouro-routing.module';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro-listar.component';
import { TipoLogradouroService } from './tipo-logradouro.service';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
    TipoLogradouroRoutingModule,
  ],

  declarations: [
    TipoLogradouroComponent,
    TipoLogradouroListarComponent,
  ],

  providers: [
    TipoLogradouroService,
  ],

})
export class TipoLogradouroModule {

}
