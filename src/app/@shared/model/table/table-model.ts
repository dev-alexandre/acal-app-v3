import { AbstractModel } from "../abstract-model";

export class Table<T> {

  content: T[];
  numberOfElements: number;
  first: boolean;
  empty: boolean;
  totalPages: number;
  totalElements: number;
  last: false;
  size: number;
  number: number;

  pageable: Pageable;
}

export class Pageable {
  offset: number;
  pageSize: number;
  pageNumber: number;
  paged: boolean;
  unpaged: boolean;
}

export class Filter {
  page: Page;
  model: AbstractModel = {};
  sort: Sort = {value: null, asc: null};
}

class Page {
  size: number;
  number: number;
}

class Sort {
  value: String = null;
  asc: Boolean = null;
}
