import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';

export const routes: Routes = [
  {
    path: '',
    component: CadastrosComponent,
    children: [
      {
        path: 'tipo-logradouro',
        loadChildren: () => import('./tipo-logradouro/tipo-lograduro.module')
          .then(m => m.TipoLogradouroModule),
      },
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrosRoutingModule {
}
