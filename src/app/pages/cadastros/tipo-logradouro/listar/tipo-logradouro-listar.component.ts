import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { AddressTypeFilter } from '@app/@shared/model/address-type/address-filter';
import { AddressType } from '@app/@shared/model/address-type/address-type.model';
import { Table } from '@app/@shared/model/table/table-model';
import { TipoLogradouroService } from '../tipo-logradouro.service';

@Component({
  selector: 'ngx-tipo-logradouro',
  templateUrl: './tipo-logradouro-listar.component.html',
  styleUrls: ['./tipo-logradouro-listar.component.scss'],
})
export class TipoLogradouroListarComponent implements OnInit {

  table: Table<AddressType>;
  filter: AddressTypeFilter;

  loading: boolean = false;

  constructor(
    public tipoLogradouroService: TipoLogradouroService) {

    this.filter = new AddressTypeFilter();
    this.filter.page = {number: 0, size: 10};
    this.filter.model = {};
  }

  ngOnInit(): void {
    this.seach();
  }

  seach(): void {
    this.loading = true;
    this.filter.page.number = 0;

    this.load();
  }

  load(): void {
    this.tipoLogradouroService
      .filtar(this.filter)
      .subscribe( table => {
        this.table = table;
        this.loading = false;
      });
  }

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

}
