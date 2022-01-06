import { AbstractModel } from '../abstract-model';
import { Address } from '../address/address.model';

export class Place extends AbstractModel {

  address?: Address = {};
  number?: String = '';
  letter?: String = '';

}

