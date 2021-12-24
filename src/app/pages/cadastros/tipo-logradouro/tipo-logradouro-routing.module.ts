import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TipoLogradouroComponent } from './tipo-logradouro.component';
import { TipoLogradouroListarComponent } from './listar/tipo-logradouro-listar.component';

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
    ],

  },



];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TipoLogradouroRoutingModule {

}
