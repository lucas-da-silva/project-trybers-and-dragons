import { LOST_BATTLE, WIN_BATTLE } from '../constants';
import Fighter from '../Fighter';

abstract class Battle {
  constructor(protected player: Fighter) { }

  // Should return 1 if player wins, -1 otherwise
  fight(): number {
    return this.player.lifePoints === LOST_BATTLE ? LOST_BATTLE : WIN_BATTLE;
  }
}

export default Battle;
