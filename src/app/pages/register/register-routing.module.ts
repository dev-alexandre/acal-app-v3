import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';

export const routes: Routes = [
  {
    path: '',
    component: RegisterComponent,
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
      {
        path: 'place',
        loadChildren: () => import('./place/place.module')
          .then(m => m.PlaceModule),
      },
      {
        path: 'group',
        loadChildren: () => import('./group/group.module')
          .then(m => m.GroupModule),
      },
      {
        path: 'customer',
        loadChildren: () => import('./customer/customer.module')
          .then(m => m.CustomerModule),
      },
      {
        path: '',
        redirectTo: 'customer',
        pathMatch: 'full',
      },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterRoutingModule {
}
