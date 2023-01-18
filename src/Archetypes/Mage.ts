import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Mage extends Archetype {
  private static _numberArchetypeInstances = 0;
  private _energyType: EnergyType = 'mana';

  constructor(name: string) {
    super(name);
    Mage._numberArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._numberArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;
