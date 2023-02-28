import { Weapon } from "./Weapon";

export class Bow extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('bow', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const durability = this.getEffectiveDurability() + Weapon.MODIFIER_CHANGE_RATE;
    if(durability <= 1) {
      this.baseDurability = durability;
    }
  }
}
