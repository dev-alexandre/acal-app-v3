import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddressAddComponent } from './add/address-add.component';
import { AddressComponent } from './address.component';
import { AddressDeleteComponent } from './delete/address-delete.component';
import { AddressEditComponent } from './edit/address-edit.component';
import { AddressListComponent } from './list/address-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: AddressComponent,
    children: [
      {
        path: 'listar',
        component: AddressListComponent,
      },
      {
        path: 'adicionar',
        component: AddressAddComponent,
      },
      {
        path: 'editar',
        component: AddressEditComponent,
      },
      {
        path: 'deletar',
        component: AddressDeleteComponent,
      },
    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddressRoutingModule {

}
