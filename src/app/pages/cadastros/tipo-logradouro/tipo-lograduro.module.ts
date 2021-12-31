import { NgModule } from '@angular/core';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroRoutingModule } from './tipo-logradouro-routing.module';
import {
  NbButtonGroupModule,
   NbButtonModule,
   NbCardModule,
   NbIconModule,
   NbInputModule,
   NbSelectModule,
   NbSpinnerModule } from '@nebular/theme';
import { TipoLogradouroService } from './tipo-logradouro.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro-listar.component';
import { TipoLogradouroAdicionarComponent } from './adicionar/tipo-logradouro-adicionar/tipo-logradouro-adicionar.component';
import { TipoLogradouroEditarComponent } from './editar/tipo-logradouro-editar.component';
import { TipoLogradouroDeletarComponent } from './deletar/tipo-logradouro-deletar.component';

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
    TipoLogradouroRoutingModule,
  ],

  declarations: [
    TipoLogradouroComponent,
    TipoLogradouroListarComponent,
    TipoLogradouroAdicionarComponent,
    TipoLogradouroEditarComponent,
    TipoLogradouroDeletarComponent,
  ],

  providers: [
    TipoLogradouroService,
  ],

})
export class TipoLogradouroModule {

}
