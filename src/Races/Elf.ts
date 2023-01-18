import Race from './Race';

class Elf extends Race {
  private static _numberCreatedInstances = 0;
  private _maxLifePoints: number;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);

    Elf._numberCreatedInstances += 1;
    this._maxLifePoints = 99;
  }

  static createdRacesInstances(): number {
    return this._numberCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
