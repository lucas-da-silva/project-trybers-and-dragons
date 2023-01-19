import { EnergyType } from '../Energy';

abstract class Archetype {
  // private _name: string;
  private _special = 0;
  private _cost = 0;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  get special(): number {
    return this._special;
  }

  get cost(): number {
    return this._cost;
  }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }

  abstract get energyType(): EnergyType;
}

export default Archetype;
