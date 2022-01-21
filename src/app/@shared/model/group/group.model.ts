import { AbstractModel } from '../abstract-model';
import { Category } from '../category/category.model';

export class Group extends AbstractModel {

  monetaryValue?: number = null;
  category?: Category = {};

}
