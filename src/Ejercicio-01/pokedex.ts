
import {Pokemon} from './pokemon';

/**
 * Clase pokedex encargada de almacenar Pokemosn, recibe en el contructor un
 * array de pokemosn
 */
export class Pokedex {
  constructor(private _pokedex: Pokemon[]) {
  }

  /**
   * getPokemosn getter de pokemons, para acceder a los pokemons
   * @returns devuelve el pokemon
   */
  public get pokedex(): Pokemon[] {
    return this._pokedex;
  }

  /**
   * Método `addPokemon` se encarga de añadir pokemons al pokedex, primero
   * comprueba si ya exite ese pokeman en la pokedex
   * @param pokemon Pokemon a añadir
   * @returns Devuelve si si agrego o si ya exite en la pokedex
   */
  addPokemon(pokemon: Pokemon) {
    let exist: boolean = false;
    // console.log(this.pokedex, exist);
    if (this.pokedex.length !== 0 ) {
      this.pokedex.forEach((pok) => {
        if (pok === pokemon) {
          exist = true;
        }
      });
    }
    // console.log(this.pokedex, exist);
    if (exist) {
      return 'Ya existe';
    } else {
      this.pokedex.push(pokemon);
      // console.log(this.pokedex);
      return 'incluido';
    }
  }
}

// let poke1 = new Pokemon('Bulbasaur', 20, 20, 'hierba', 49, 49, 45, 45);
// let poke2 = new Pokemon('Squirtle', 4, 17, 'agua', 48, 65, 13, 44);
// let poke3 = new Pokemon('Pikachu', 20, 12, 'grass', 55, 40, 90, 35);
// let poke4 = new Pokemon('Charmander', 23, 8, 'grass', 52, 58, 65, 39);
// let vecPoke: Pokemon[] = [poke1, poke2, poke3];
// let result:Pokedex = new Pokedex([]);
// console.log(result.addPokemon(poke1));
// console.log(result.getPokemons());

// let ataque = new Combat(poke1, poke2);
// console.log(result);
// console.log(result.getPokemons());
// ataque.start();
