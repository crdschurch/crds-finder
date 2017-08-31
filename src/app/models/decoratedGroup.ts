import { Findable } from './findable';
import { Contactable } from '../traits/contactable';


export class DecoratedGroup extends Findable {

  description: string;

  constructor($id, $Owner, $description) {
    super($id, $Owner);
    this.description = $description;
  }
}
