import Fighter from '../Fighter';
import Battle from './Battle';

const LOST_BATTLE = -1;

class PVP extends Battle {
  constructor(
    private _firstCharacter: Fighter,
    private _secondCharacter: Fighter,
  ) {
    super(_firstCharacter);
  }

  fight(): number {
    while (
      this._firstCharacter.lifePoints !== LOST_BATTLE
      && this._secondCharacter.lifePoints !== LOST_BATTLE
    ) {
      this._firstCharacter.attack(this._secondCharacter);
      this._secondCharacter.attack(this._firstCharacter);
    }
    return this._firstCharacter.lifePoints === LOST_BATTLE ? -1 : 1;
  }
}

export default PVP;
