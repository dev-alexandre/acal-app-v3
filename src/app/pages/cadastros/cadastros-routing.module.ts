import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrosComponent } from './cadastros.component';

export const routes: Routes = [
  {
    path: '',
    component: CadastrosComponent,
    children: [
      {
        path: 'address-type',
        loadChildren: () => import('./address-type/address-type.module')
          .then(m => m.AddressTypeModule),
      },
      {
        path: 'address',
        loadChildren: () => import('./address/address.module')
          .then(m => m.AddressModule),
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CadastrosRoutingModule {
}
