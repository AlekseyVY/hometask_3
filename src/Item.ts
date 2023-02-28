import { Comparable } from "./Comparable";

export abstract class Item implements Comparable<Item> {
  protected static idCounter: number = 1;
  protected readonly id: number;
  public readonly name: string;
  public value: number;
  public weight: number;

  constructor(name: string, value: number, weight: number) {
    this.id = Item.idCounter;
    Item.idCounter += 1;
    this.name = name;
    this.value = value;
    this.weight = weight;
  }

  protected static resetIdCounter(): void {
    this.idCounter = 1;
  }


  compareTo(other: Item): number {
    if(this.value > other.value) {
      return 1;
    } else if(this.value < other.value) {
      return -1;
    } else {
      const thisName = this.name.toLowerCase();
      const otherName = other.name.toLowerCase();
      if(thisName > otherName ) {
        return 1;
      } else if(thisName < otherName) {
        return -1;
      } else {
        return 0;
      }
    }
  }

  toString(): string {
    return `${this.name} − Value: ${Number(this.value).toFixed(2)}, Weight: ${Number(this.weight).toFixed(2)}`;
  }

  getId(): number {
    return this.id;
  }
}
