import { AbstractModel } from '../abstract-model';
import { AddressType } from '../address-type/address-type.model';

export class Address extends AbstractModel {

  addressType?: AddressType = {};

}
