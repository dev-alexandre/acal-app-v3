import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CadastrosRoutingModule } from './cadastros-routing.module';
import { CadastrosComponent } from './cadastros.component';

@NgModule({
  imports: [
    RouterModule,
    CadastrosRoutingModule,
  ],
  declarations: [
    CadastrosComponent
  ]
})
export class CadastrosModule {

}
