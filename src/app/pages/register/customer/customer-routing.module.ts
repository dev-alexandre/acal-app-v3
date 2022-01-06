import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAddComponent } from './add/customer-add.component';
import { CustomerComponent } from './customer.component';
import { CustomerDeleteComponent } from './delete/customer-delete.component';
import { CustomerEditComponent } from './edit/customer-edit.component';
import { CustomerListComponent } from './list/customer-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'listar',
        component: CustomerListComponent,
      },
      {
        path: 'adicionar',
        component: CustomerAddComponent,
      },
      {
        path: 'editar',
        component: CustomerEditComponent,
      },
      {
        path: 'deletar',
        component: CustomerDeleteComponent,
      },
    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CustomerRoutingModule {

}
