import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressTypeAddComponent } from './add/address-type-add.component';
import { AddressTypeComponent } from './address-type.component';
import { AddressTypeDeleteComponent } from './delete/address-type-delete.component';
import { AddressTypeEditComponent } from './edit/address-type-edit.component';
import { AddressTypeListComponent } from './list/address-type-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: AddressTypeComponent,
    children: [
      {
        path: 'listar',
        component: AddressTypeListComponent,
      },
      {
        path: 'adicionar',
        component: AddressTypeAddComponent,
      },
      {
        path: 'editar',
        component: AddressTypeEditComponent,
      },
      {
        path: 'deletar',
        component: AddressTypeDeleteComponent,
      },
    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressTypeRoutingModule {

}
