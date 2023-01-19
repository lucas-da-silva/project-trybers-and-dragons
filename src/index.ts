import Battle, { PVE, PVP } from './Battle';
import Character from './Character';
import Dragon from './Dragon';
import Monster from './Monster';

const LEVEL_UP = 4;

const player1 = new Character('Geralt de Rivia');
const player2 = new Character('Bilbo Baggins');
const player3 = new Character('Gandalf');

for (let i = 0; i < LEVEL_UP; i += 1) {
  player1.levelUp();
}

const monster1 = new Monster();
const monster2 = new Dragon();

const pvp = new PVP(player2, player3);

const pve = new PVE(player1, [monster1, monster2]);

function runBattles(battles: Battle[]) {
  battles.forEach((battle) => battle.fight());
}

export { player1, player2, player3, monster1, monster2, pvp, pve, runBattles };
