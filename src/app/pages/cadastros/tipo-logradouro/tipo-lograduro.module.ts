import { NgModule } from '@angular/core';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroRoutingModule } from './tipo-logradouro-routing.module';
import { NbButtonModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro-listar.component';

@NgModule({

  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    TipoLogradouroRoutingModule
  ],

  declarations: [
    TipoLogradouroComponent,
    TipoLogradouroListarComponent,
  ]

})
export class TipoLogradouroModule {

}
