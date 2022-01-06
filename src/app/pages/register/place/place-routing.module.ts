import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlaceAddComponent } from './add/place-add.component';
import { PlaceDeleteComponent } from './delete/place-delete.component';
import { PlaceEditComponent } from './edit/place-edit.component';
import { PlaceListComponent } from './list/place-list.component';
import { PlaceComponent } from './place.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'listar',
  },
  {
    path: '',
    component: PlaceComponent,
    children: [
      {
        path: 'listar',
        component: PlaceListComponent,
      },
      {
        path: 'adicionar',
        component: PlaceAddComponent,
      },
      {
        path: 'editar',
        component: PlaceEditComponent,
      },
      {
        path: 'deletar',
        component: PlaceDeleteComponent,
      },
    ],

  },

];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlaceRoutingModule {

}
