import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-select-rows-number',
  templateUrl: './select-rows-number.component.html',
})
export class SelectRowsNumberComponent {

  public rowSize: number = 10;
  public lastRowSize: number = 10;

  @Output()
  private setValue = new EventEmitter();

  onSelectionChange() {
    if (this.lastRowSize === this.rowSize) {
      return;
    }

    this.lastRowSize = this.rowSize;
    this.setValue.emit(this.rowSize);
  }

}
