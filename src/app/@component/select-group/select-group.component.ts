import { ChangeDetectionStrategy, Component, ViewChild, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Group } from '@app/@shared/model/group/group.model';
import { Filter } from '@app/@shared/model/table/table-model';
import { GroupPipe } from '@app/@shared/pipe/group/patner.pipe';
import { GroupService } from '@app/pages/register/group/service/group.service';
import { AllOptions, SelectComponent } from '../select/select.component';

export interface Options {
  name: String;
  groups: Group[];
}

@Component({
  selector: 'app-select-group',
  templateUrl: './select-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectGroupComponent extends SelectComponent<Group> {

  @Input()
  public status: String = 'basic';

  @Output()
  private setValue = new EventEmitter();

  @ViewChild('autoInput')
  public input: any;

  constructor(public service: GroupService) {
    super(service);
  }

  public options: Group[];
  public allOptions: AllOptions<Group>[];
  public filter: Filter<Group>;
  public selected: Group;


  getEmiter(): EventEmitter<Group> {
    return this.setValue;
  }

  public get inputtedValue(): string {
    return this.input.nativeElement.value;
  }

  public set inputtedValue(value: string) {
    this.input.nativeElement.value = value;
  }

  public get model(): Group {
    return {name: this.inputtedValue};
  }

}
