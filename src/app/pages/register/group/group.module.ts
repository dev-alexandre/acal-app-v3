import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PipeModule } from '@app/@shared/pipe/pipe.module';
import { NbButtonGroupModule, NbButtonModule, NbCardModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { GroupAddComponent } from './add/group-add.component';
import { GroupRoutingModule } from './group-routing.module';
import { GroupService } from './service/group.service';
import { GroupListComponent } from './list/group-list.component';
import { GroupComponent } from './group.component';
import { NgxMaskModule } from 'ngx-mask';
import { GroupDeleteComponent } from './delete/group-delete.component';
import { GroupEditComponent } from './edit/group-edit.component';


@NgModule({
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbIconModule,
    NbSelectModule,
    NbButtonGroupModule,
    NbSpinnerModule,

    CommonModule,
    FormsModule,
    ReactiveFormsModule,

    PipeModule,
    GroupRoutingModule,
    NgxMaskModule.forChild(),
  ],

  declarations: [
    GroupComponent,
    GroupAddComponent,
    GroupDeleteComponent,
    GroupEditComponent,
    GroupListComponent,
  ],

  providers: [
    GroupService,

  ],
})
export class GroupModule { }
