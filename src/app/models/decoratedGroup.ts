import { Findable } from './findable';
import { Contactable } from '../traits/contactable';

@Contactable
export class DecoratedGroup extends Findable {

  description: string;

  constructor($id, $Owner, $description) {
    super($id, $Owner);
    this.description = $description;
  }
}
