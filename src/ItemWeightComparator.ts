import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class ItemWeightComparator implements ItemComparator {
  compare(first: Item, second: Item): number {
    // the same too overloaded
    /*
    *  if (first.weight === second.weight) {
            return first.compareTo(second);
        }

        return first.weight > second.weight? 1 : -1;
    *
    * */
    if(first.weight > second.weight) {
      return 1;
    } else if(first.weight < second.weight) {
      return -1;
    } else {
      return first.compareTo(second);
    }
  }
}
