import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';

@NgModule({
  imports: [
    RouterModule,
    RegisterRoutingModule,
  ],
  declarations: [
    RegisterComponent,
  ],
})
export class RegisterModule {

  constructor() {
  }
}
