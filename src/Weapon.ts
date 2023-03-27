import { Item } from "./Item";

export abstract class Weapon extends Item {
  static MODIFIER_CHANGE_RATE: number = 0.05;
  damageModifier: number = 0;
  baseDamage: number;
  baseDurability: number;
  durabilityModifier: number = 0;

  constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
    super(name, value, weight)
    this.baseDamage = baseDamage;
    this.baseDurability = baseDurability;
  }

  use(): string {
    if(this.baseDurability <= 0) {
      return `You can't use the ${this.name}, it is broken.`;
    }
    this.baseDurability -= Weapon.MODIFIER_CHANGE_RATE;
    if(this.baseDurability <= 0) {
      return `You use the ${this.name}, dealing ${ Weapon.MODIFIER_CHANGE_RATE } points of damage.\nThe ${this.name} breaks.`;
    }
    return `You use the ${this.name}, dealing ${ Weapon.MODIFIER_CHANGE_RATE } points of damage.`;
  }

  // please remove unnecessary methods

  polish(): void {

  }

  toString(): string {
    return `${this.name} − Value: ${Number(this.value).toFixed(2)}, Weight: ${Number(this.weight).toFixed(2)}, Damage: ${Number(this.getEffectiveDamage()).toFixed(2)}, Durability: ${Number(this.getEffectiveDurability() * 100).toFixed(2)}%`;
  }

  getEffectiveDamage(): number {
    return this.baseDamage + this.damageModifier;
  }

  getEffectiveDurability(): number;
  getEffectiveDurability(durabilityModifier?: number): number {
    if(durabilityModifier) {
      const currDurability = this.baseDurability + durabilityModifier;
      return currDurability > 0 ? currDurability : 0;
    }
    return this.baseDurability > 0 ? this.baseDurability : 0;
  }


}
