import {Pokemon} from './pokemon';

/**
 * Calse Combat
 */
export class Combat {
  /**
   * Constructor
   * @param contrincante1 uno
   * @param contrincante2 dos
   */
  constructor(public contrincante1: Pokemon, public contrincante2: Pokemon) {
  }
  start() {
    let danoCon1: number = 0;
    let danoCon2: number = 0;
    console.log(`HP inicial contrincante 1 = ${(this.contrincante1.hp)}\nHP inicial contrincante 2 = ${(this.contrincante2.hp)}\n`);
    while (danoCon1 <= this.contrincante1.hp && danoCon2 <= this.contrincante2.hp) {
      danoCon1 += this.pokemonCoach(this.contrincante1, this.contrincante2);
      if ((this.contrincante1.hp - danoCon1) < 0) {
        console.log(`HP contrincante 1 = ${0}`);
      } else {
        console.log(`HP contrincante 1 = ${this.contrincante1.hp - danoCon1}`);
      }
      danoCon2 += this.pokemonCoach(this.contrincante2, this.contrincante1);
      if ((this.contrincante2.hp - danoCon2) < 0) {
        console.log(`HP contrincante 2 = ${0}`);
      } else {
        console.log(`HP contrincante 2 = ${this.contrincante2.hp - danoCon2}`);
      }
    }
    // console.log('hi')
  }

  pokemonCoach(Cont1: Pokemon, Cont2: Pokemon): number {
    let efect: number = 0;
    if (Cont1.type === 'fuego' && Cont2.type === 'hierba') {
      efect = 2;
    } else if (Cont1.type === 'fuego' && Cont2.type === 'agua') {
      efect = 0.5;
    } else if (Cont1.type === 'fuego' && Cont2.type === 'electrico') {
      efect = 1;
    } else if (Cont1.type === 'agua' && Cont2.type === 'hierba') {
      efect = 0.5;
    } else if (Cont1.type === 'agua' && Cont2.type === 'electrico') {
      efect = 0.5;
    } else if (Cont1.type === 'hierba' && Cont2.type === 'electrico') {
      efect = 1;
      //
    } else if (Cont1.type === 'hierba' && Cont2.type === 'fuego') {
      efect = 0.5;
    } else if (Cont1.type === 'agua' && Cont2.type === 'fuego') {
      efect = 2;
    } else if (Cont1.type === 'electrico' && Cont2.type === 'fuego ') {
      efect = 1;
    } else if (Cont1.type === 'hierba' && Cont2.type === 'agua') {
      efect = 2;
    } else if (Cont1.type === 'electrico' && Cont2.type === 'agua') {
      efect = 2;
    } else if (Cont1.type === 'electrico' && Cont2.type === 'hierba') {
      efect = 1;
    } else if (Cont1.type === Cont2.type) {
      efect = 0.5;
    } else {
      console.log('Tipo de Pokemon erroneo');
    }
    return ~~(50 * (Cont1.attack / Cont2.defense) * efect);
  }
}


// let poke1 = new Pokemon('Bulbasaur', 20, 20, 'hierba', 49, 49, 45, 45);
// let poke2 = new Pokemon('Squirtle', 4, 17, 'agua', 48, 65, 13, 44);
// let poke3 = new Pokemon('Pikachu', 20, 12, 'grass', 55, 40, 90, 35);
// let poke4 = new Pokemon('Charmander', 23, 8, 'grass', 52, 58, 65, 39);
// // let vecPoke: Pokemon[] = [poke1, poke2, poke3];
// // let result:Pokedex = new Pokedex([]);
// // result.addPokemon(poke1);

// let ataque = new Combat(poke1, poke2);
// ataque.start();
