import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GroupAddComponent } from './add/group-add.component';
import { GroupDeleteComponent } from './delete/group-delete.component';
import { GroupEditComponent } from './edit/group-edit.component';
import { GroupComponent } from './group.component';
import { GroupListComponent } from './list/group-list.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: 'listar',
        component: GroupListComponent,
      },
      {
        path: 'adicionar',
        component: GroupAddComponent,
      },
      {
        path: 'editar',
        component: GroupEditComponent,
      },
      {
        path: 'deletar',
        component: GroupDeleteComponent,
      },

    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRoutingModule {

}
