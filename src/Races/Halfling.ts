import Race from './Race';

class Halfling extends Race {
  private static _numberCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Halfling._numberCreatedInstances += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return this._numberCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;
