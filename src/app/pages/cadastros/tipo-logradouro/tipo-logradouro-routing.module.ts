import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro-listar.component';
import { TipoLogradouroAdicionarComponent } from './adicionar/tipo-logradouro-adicionar/tipo-logradouro-adicionar.component';
import { TipoLogradouroEditarComponent } from './editar/tipo-logradouro-editar.component';
import { TipoLogradouroDeletarComponent } from './deletar/tipo-logradouro-deletar.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: TipoLogradouroComponent,
    children: [
      {
        path: 'listar',
        component: TipoLogradouroListarComponent,
      },
      {
        path: 'adicionar',
        component: TipoLogradouroAdicionarComponent,
      },
      {
        path: 'editar',
        component: TipoLogradouroEditarComponent,
      },
      {
        path: 'deletar',
        component: TipoLogradouroDeletarComponent,
      },
    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoLogradouroRoutingModule {

}
