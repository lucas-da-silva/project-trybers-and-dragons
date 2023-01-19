import { LOST_BATTLE, WIN_BATTLE } from '../constants';
import Fighter from '../Fighter';
import Battle from './Battle';

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
    return this._firstCharacter.lifePoints === LOST_BATTLE
      ? LOST_BATTLE
      : WIN_BATTLE;
  }
}

export default PVP;
