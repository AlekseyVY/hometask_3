import { Consumable } from "./Consumable";

export class Pizza extends Consumable{
  readonly numberOfSlices: number;
  numberOfEatenSlices: number;
  constructor(value: number, weight: number, numberOfSlices: number) {
    super('pizza', value, weight, false);
    this.numberOfSlices = numberOfSlices;
    this.numberOfEatenSlices = 0;
  }

  use(): string {
    if (this.numberOfEatenSlices === this.numberOfSlices) {
      this.isConsumed = true;
      return super.use();
    } else {
      this.numberOfEatenSlices++;
      return `You consumed a slice of the ${this.name}.`;
    }
  }

  getNumberOfEatenSlices(): number {
    return this.numberOfEatenSlices;
  }

}
