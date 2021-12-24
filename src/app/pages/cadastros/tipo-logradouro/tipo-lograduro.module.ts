import { NgModule } from '@angular/core';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroRoutingModule } from './tipo-logradouro-routing.module';
import { NbCardModule } from '@nebular/theme';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro-listar.component';

@NgModule({

  imports: [
    NbCardModule,
    TipoLogradouroRoutingModule
  ],

  declarations: [
    TipoLogradouroComponent,
    TipoLogradouroListarComponent,
  ]

})
export class TipoLogradouroModule {

}
