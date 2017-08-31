import { Owner } from './owner';
import { IContactable } from 'app/traits/IContactable';

export class Findable implements IContactable {
  id: number;
  owner: Owner;
  type: string;

  constructor($id: number, $owner: Owner) {
    this.id = $id;
    this.owner = $owner;
    this.type = this.constructor.name;
  }

  contact( message: string = null): void {
    window.alert(`Message: ${message} from Type: ${this.type} of findable`);
  }
}
