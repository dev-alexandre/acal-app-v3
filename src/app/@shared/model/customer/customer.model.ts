import { AbstractModel } from '../abstract-model';

export class Customer extends AbstractModel {

  document?: string = null;
  businessName?: string = null;
  phoneNumber?: string = null;
  birthDate?: Date = null;

}
