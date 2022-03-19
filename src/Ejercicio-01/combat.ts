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
  constructor(private _contrincante1: Pokemon, private _contrincante2: Pokemon) {
  }

  public get contrincante2(): Pokemon {
    return this._contrincante2;
  }
  public get contrincante1(): Pokemon {
    return this._contrincante1;
  }
  /**
  * Realiza la simulacion del combate entre dos pokemons
  * @param print Se encarga de indicar si sale por pantalla la evolucion del
  * combate
  * @returns devuelve un stringcon el ganador o si el pokemon es erroneo, o
  * ninguno gana
  */
  start(print: boolean): string {
    let danoCon1: number = 0;
    let danoCon2: number = 0;
    let cont: number = 0;
    if (print) {
      console.log(`HP inicial ${this.contrincante1.name} = ${(this.contrincante1.hp)}\nHP inicial ${this.contrincante2.name} = ${(this.contrincante2.hp)}\n`);
    }
    while (danoCon1 <= this.contrincante1.hp && danoCon2 <= this.contrincante2.hp) {
      danoCon1 += this.pokemonCoach(this.contrincante1, this.contrincante2);
      if (print) {
        console.log(`Ataque ${cont}`);
        if ((this.contrincante1.hp - danoCon1) < 0) {
          console.log(`HP ${this.contrincante1.name} = ${0}`);
        } else {
          console.log(`HP ${this.contrincante1.name} = ${this.contrincante1.hp - danoCon1}`);
        }
      }
      if (this.isDead(this.contrincante1.hp - danoCon1)) {
        return `Muere ${this.contrincante1.name}`;
      }
      danoCon2 += this.pokemonCoach(this.contrincante2, this.contrincante1);
      if (print) {
        if ((this.contrincante2.hp - danoCon2) < 0) {
          console.log(`HP ${this.contrincante2.name} = ${0}`);
        } else {
          console.log(`HP ${this.contrincante2.name} = ${this.contrincante2.hp - danoCon2}`);
        }
      }
      if (this.isDead(this.contrincante2.hp - danoCon2)) {
        return `Muere ${this.contrincante2.name}`;
      };
      cont++;
    }
    if (Number.isNaN(danoCon1) || Number.isNaN(danoCon2)) {
      return 'Tipo de Pokemon erroneo';
    } else {
      return 'no gana';
    }
    // console.log(danoCon1, danoCon2);
    // console.log('hi')
  }

  /**
   * `isDead` comprueba si un pokemon a muerto
   * @param result Resta del HP - daño
   * @returns devuelve `true` si muere o `false` si no;
   */
  isDead(result: number): boolean {
    if (result <= 0) {
      return true;
    } else {
      return false;
    }
  }

  /**
  * Se encarga de calcular el daño que un movimiento concreto causará a partir de
  * @param typeMy El tipo que es mi Pokemon
  * @param typeOpponet El tipo de Pokemon es el del oponente
  * @param attck Mi capacidad de ataque
  * @param defense Capacidad de defensa del oponente
  * @returns Devuelve el daño causado
  */
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
      return NaN;
    }
    return ~~(50 * (Cont1.attack / Cont2.defense) * efect);
  }
}


// let poke1 = new Pokemon('Bulbasaur', 20, 20, 'hierba', 49, 49, 45, 45);
// let poke2 = new Pokemon('Squirtle', 4, 17, 'agua', 48, 65, 13, 44);
// let poke3 = new Pokemon('Pikachu', 20, 12, 'hierba', 55, 40, 90, 35);
// let poke4 = new Pokemon('Charmander', 23, 8, 'hierva', 52, 58, 65, 39);
// // let vecPoke: Pokemon[] = [poke1, poke2, poke3];
// // let result:Pokedex = new Pokedex([]);
// // result.addPokemon(poke1);

// let ataque = new Combat(poke1, poke3);
// console.log(ataque.start());
