import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-category',
  templateUrl: './select-category.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectCategoryComponent implements OnInit {

  @Input()
  public form: FormControl;

  @Input()
  public selected: String = null;

  @Input()
  public showTitle: Boolean = true;

  @Input()
  public submitted: boolean = false;

  @Input()
  public disabled: boolean = false;

  @Output()
  private setValue = new EventEmitter();

  constructor() {

  }

  ngOnInit(): void {
    this.selected = this.form?.value;
  }

  onSelectionChange() {
    this.setValue.emit(this.selected);
  }

}
