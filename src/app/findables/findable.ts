export class Findable {
  private type;

  constructor() {
    this.type = this.getType();
  }

  getType() {
    return this.constructor.name;
  }
}