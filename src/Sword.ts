import { Weapon } from "./Weapon";

export class Sword extends Weapon {

  constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
    super('sword', baseDamage, baseDurability, value, weight);
  }

  polish(): void {
    const maxDamage = this.baseDamage + (this.baseDamage * 0.25);
    if(this.baseDamage + this.damageModifier < maxDamage) {
      this.damageModifier += Weapon.MODIFIER_CHANGE_RATE;
    } else {
      this.damageModifier = this.baseDamage * 0.25;
    }

  }
}
