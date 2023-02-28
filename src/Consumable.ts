export abstract class Consumable {
  public isConsumed: boolean = false;
  isSpoiled: boolean;
  name: string;
  value: number;
  weight: number;

  constructor(name: string, value: number, weight: number, isSpoiled: boolean) {
    this.name = name;
    this.value = value;
    this.weight = weight;
    this.isSpoiled = isSpoiled;
  }
  // use(): void;
  use(): string {
    if(this.isConsumed) {
      return `There's nothing left of the ${this.name} to consume.`;
    } else if(!this.isConsumed && this.isSpoiled) {
      return `You consumed the ${this.name}.\nYou feel sick.`
    } else {
      return `You consumed the ${this.name}.`
    }
  }
}
