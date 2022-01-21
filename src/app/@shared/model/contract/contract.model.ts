import { AbstractModel } from '../abstract-model';
import { Customer } from '../customer/customer.model';
import { Group } from '../group/group.model';
import { Place } from '../place/place.model';

export class Contract extends AbstractModel {

  name?: String = null;
  nameBusiness?: String = null;
  group?: Group = null;
  placeMail?: Place = null;
  placeResidence?: Place = null;
  customer?: Customer = null;

}
