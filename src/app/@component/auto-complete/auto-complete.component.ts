import { EventEmitter } from '@angular/core';
import { AbstractModel } from '@app/@shared/model/abstract-model';
import { Service } from '@app/@shared/model/structure/service';
import { Filter } from '@app/@shared/model/table/table-model';

export interface AllOptions<T extends AbstractModel> {
  name: String;
  groups: T[];
}

export abstract class AutoCompleteComponent<T extends AbstractModel> {

  public size: number = 0;
  public options: T[] = [];
  public allOptions: AllOptions<T>[] = [];

  public filter: Filter<T>;
  public selected: T = null;

  abstract getEmiter(): EventEmitter<T>;

  constructor(public service: Service<T>) {
    this.filter = {
      page: {size: 10, number: 0},
      sort: {value: 'name', asc: true},
      model: null,
    };
  }

  viewHandle(t: T) {
    if (typeof t === 'string') {
        return t;
    }

    return t.name;
  }

  focusOutFunction() {
  }

  onSelectionChange($event: T) {
    this.selected = $event;
    this.options = this.options.filter( filter => {filter.name === this.selected.name; });
    this.getEmiter().emit(this.selected);
  }

  onChange() {
    this.size = this.inputtedValue.length;
    if (this.inputtedValue.length < 3) {
      return;
    }

    const filter: Filter<T> = {
      page: {size: 10, number: 0},
      sort: {value: 'name', asc: true},
      model: this.model,
    };

    this.service.filterByExample(filter).subscribe(
      (options) => {
        this.options = options;
        this.createMenu();
      });
  }

  clear(): void {
    this.size = 0;
    this.selected = null;
    this.inputtedValue = '';
    this.allOptions = [];
    this.getEmiter().emit(null);
  }

  public createMenu(): void {
    this.options.forEach(option => {
      this.createOption(option);
    });

    this.options.sort((a, b) => a.name > b.name ? 1 : -1);
  }

  public createOption(t: T) {
    this.allOptions = [];
    const letter = t.name.substring(0, 1);

    const hasOptions = this.allOptions.some( (op) => {
      op.name === letter;
    });

    if (!hasOptions) {
      this.allOptions.push(
        {
          name: letter,
          groups: this.options.filter( filter => filter.name.substring(0, 1) === letter ),
        });
    }

  }


  public abstract get inputtedValue(): string;
  public abstract set inputtedValue(inputtedValue: string);
  public abstract get model(): T

}
