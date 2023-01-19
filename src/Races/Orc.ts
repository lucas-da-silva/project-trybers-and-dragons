import Race from './Race';

class Orc extends Race {
  private static _numberCreatedInstances = 0;
  private _maxLifePoints = 74;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._numberCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._numberCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;
