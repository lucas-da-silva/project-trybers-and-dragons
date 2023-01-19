import { LOST_BATTLE, WIN_BATTLE } from '../constants';
import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  constructor(
    private _character: Fighter,
    private _monsters: (SimpleFighter | Fighter)[],
  ) {
    super(_character);
  }

  fight(): number {
    while (
      this._character.lifePoints !== LOST_BATTLE
      && this._monsters.every(({ lifePoints }) => lifePoints !== LOST_BATTLE)
    ) {
      this._monsters.forEach((monster) => {
        this._character.attack(monster);
        monster.attack(this._character);
      });
    }
    return this._character.lifePoints === LOST_BATTLE
      ? LOST_BATTLE
      : WIN_BATTLE;
  }
}

export default PVE;
