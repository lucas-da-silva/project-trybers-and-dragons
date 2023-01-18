import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';
import getRandomInt from './utils';

const MIN_VALUE_RANDOM = 1;
const MIN_VALUE_LIFE = 1;
const MIN_VALUE_DAMAGE = 1;
const MAX_VALUE_RANDOM = 10;
const MAX_VALUE_ENERGY = 10;

class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype; 
  private _maxLifePoints: number; 
  private _lifePoints: number; 
  private _strength: number; 
  private _defense: number;
  private _dexterity: number;
  private _energy: Energy;

  constructor(name: string) {
    const randomDexterity = getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);

    this._dexterity = randomDexterity;
    this._race = new Elf(name, randomDexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);
    this._defense = getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);
    this._energy = { 
      type_: this._archetype.energyType, 
      amount: getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM),
    };
  }

  get race(): Race {
    return this._race;
  }

  get archetype(): Archetype {
    return this._archetype;
  }
  
  get lifePoints(): number {
    return this._lifePoints;
  }
  
  get strength(): number {
    return this._strength;
  }
  
  get defense(): number {
    return this._defense;
  }
  
  get dexterity(): number {
    return this._dexterity;
  }
  
  get energy(): Energy {
    return { ...this._energy } as const;
  }

  receiveDamage(attackPoints: number): number {
    const damageToLife = attackPoints - this._defense;
    
    if (damageToLife < MIN_VALUE_LIFE) this._lifePoints -= MIN_VALUE_DAMAGE;
    if (damageToLife >= MIN_VALUE_LIFE) this._lifePoints -= damageToLife;
    if (this._lifePoints < MIN_VALUE_LIFE) this._lifePoints = -1;

    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  } 

  levelUp(): void {
    this._maxLifePoints += getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);
    this._strength += getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);
    this._dexterity += getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);
    this._defense += getRandomInt(MIN_VALUE_RANDOM, MAX_VALUE_RANDOM);
    this._energy.amount = MAX_VALUE_ENERGY;

    if (this._maxLifePoints > this.race.maxLifePoints) { 
      this._maxLifePoints = this.race.maxLifePoints;
    }

    this._lifePoints = this._maxLifePoints;
  }

  special(enemy: Fighter): void {
    enemy.receiveDamage(this._strength * 1000);
  }
}

export default Character;