import { Owner } from '../models/owner';

export interface IContactable {
  owner: Owner;
  type: string;
  contact(message: string): void;
}
