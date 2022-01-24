import { ChangeDetectionStrategy, Component, ViewChild, Output, EventEmitter, Input } from '@angular/core';
import { Group } from '@app/@shared/model/group/group.model';
import { Filter } from '@app/@shared/model/table/table-model';
import { GroupService } from '@app/pages/register/group/service/group.service';
import { AllOptions, AutoCompleteComponent } from '../auto-complete.component';

export interface Options {
  name: String;
  groups: Group[];
}

@Component({
  selector: 'app-auto-complete-group',
  templateUrl: './auto-complete-group.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AutoCompleteGroupComponent extends AutoCompleteComponent<Group> {

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
