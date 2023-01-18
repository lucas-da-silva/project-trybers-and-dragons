import { EnergyType } from '../Energy';
import Archetype from './Archetype';

class Warrior extends Archetype {
  private static _numberArchetypeInstances = 0;
  private _energyType: EnergyType = 'stamina';

  constructor(name: string) {
    super(name);
    Warrior._numberArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return this._numberArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
