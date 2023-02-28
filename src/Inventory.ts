import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
  items: Item[] = [];

  addItem(item: Item): void {
    this.items.push(item);
  }

  sort(): void;
  sort(comparator?: ItemComparator): void {
    if(comparator) {
      this.items.sort(comparator.compare);
    } else {
      this.items.sort((a, b) => a.value - b.value)
    }

  }

  toString(): string {
    return this.items.map((item) => `${item.name} − Value: ${Number(item.value).toFixed(2)}, Weight: ${Number(item.weight).toFixed(2)}`).join(', ')
  }
}
