import { Findable } from './findable';
import { Owner } from './owner';

export class Event extends Findable {
  description: string;

  constructor(id: number, owner: Owner, description: string) {
    super(id, owner);
    this.description = description;
  }
}
