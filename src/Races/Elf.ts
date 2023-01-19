import Race from './Race';

class Elf extends Race {
  private static _numberCreatedInstances = 0;
  private _maxLifePoints = 99;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._numberCreatedInstances += 1;
  }

  static createdRacesInstances(): number {
    return this._numberCreatedInstances;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;
