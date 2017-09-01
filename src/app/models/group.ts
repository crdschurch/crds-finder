import { Findable } from './findable';
import { Owner } from './owner';
import { IContactable } from '../traits/IContactable';
import { log } from '../traits/logable';

export class Group extends Findable implements IContactable {
  description: string;

  ageRanges: any;

  constructor($id: number, $owner: Owner, $description: string) {
    super($id, $owner);
    this.description = $description;
  }

  @log
  contact(message: string = null): void {
    window.alert(`Message: ${message} from Type: ${this.type} of findable and the description is ${this.description}`);
  }
}
