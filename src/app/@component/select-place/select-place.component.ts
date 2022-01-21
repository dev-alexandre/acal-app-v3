import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { Place } from '@app/@shared/model/place/place.model';
import { Filter } from '@app/@shared/model/table/table-model';
import { PlaceService } from '@app/pages/register/place/service/place.service';
import { AllOptions, SelectComponent } from '../select/select.component';

@Component({
  selector: 'app-select-place',
  templateUrl: './select-place.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectPlaceComponent  extends SelectComponent<Place> {

  @Input()
  public status: String = 'basic';

  @Output()
  private setValue = new EventEmitter();

  @ViewChild('autoInput')
  public input: any;

  constructor(public service: PlaceService) {
    super(service);
  }

  public options: Place[];
  public allOptions: AllOptions<Place>[];
  public filter: Filter<Place>;
  public selected: Place;


  getEmiter(): EventEmitter<Place> {
    return this.setValue;
  }

  public get inputtedValue(): string {
    return this.input.nativeElement.value;
  }

  public set inputtedValue(value: string) {
    this.input.nativeElement.value = value;
  }

  public get model(): Place {
    return {name: this.inputtedValue};
  }

}
