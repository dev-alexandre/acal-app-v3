import { ActivatedRoute, Router } from '@angular/router';
import { Filter, Table } from '@app/@shared/model/table/table-model';
import { AbstractModel } from '../abstract-model';
import { Service } from './service';

export abstract class ListComponent<T extends AbstractModel> {

  table: Table<T>;
  filter: Filter<T>;
  abstract key(): string;

  loading: boolean = false;

  constructor(
    public router: Router,
    public activeRouter: ActivatedRoute,
    public service: Service<T>,
    ) {

    this.filter = new Filter();
    this.filter.page = {number: 0, size: 10};
    this.filter.model = null;
    this.initModel(this.filter);
  }

  seach(): void {
    this.loading = true;
    this.filter.page.number = 0;

    this.load();
  }

  load(): void {
    this.service
      .filter(this.filter)
      .subscribe( table => {
        this.table = table;
        this.loading = false;
      });
  }

  abstract initModel(filter: Filter<T>): void;

  order(value: String): void {

    if (this.filter.sort.asc == null) {
      this.filter.sort.asc = false;
    }

    this.filter.sort.asc = !this.filter.sort.asc;
    this.filter.sort.value = value;
    this.load();
  }

  paginar(value: number): void {
    this.filter.page.number = value;
    this.load();
  }

  public navegar(destino: string, t: T): void {
    sessionStorage.setItem(`${this.key()}[${destino}]`, JSON.stringify(t));
    this.router.navigate([ destino ], { relativeTo: this.activeRouter.parent });
  }

  public adicionar() {
    this.router.navigate([ './adicionar' ], { relativeTo: this.activeRouter.parent });
  }

}
