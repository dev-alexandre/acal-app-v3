import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContractAddComponent } from './add/contract-add.component';
import { ContractComponent } from './contract.component';
import { ContractDeleteComponent } from './delete/contract-delete.component';
import { ContractEditComponent } from './edit/contract-edit.component';
import { ContractListComponent } from './list/contract-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: ContractComponent,
    children: [
      {
        path: 'listar',
        component: ContractListComponent,
      },
      {
        path: 'adicionar',
        component: ContractAddComponent,
      },
      {
        path: 'editar',
        component: ContractEditComponent,
      },
      {
        path: 'deletar',
        component: ContractDeleteComponent,
      },
    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContractRoutingModule {

}
