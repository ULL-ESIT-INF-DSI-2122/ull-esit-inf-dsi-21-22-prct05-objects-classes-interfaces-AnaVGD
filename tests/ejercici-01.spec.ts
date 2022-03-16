import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/Ejercicio-01/pokemon';
import {Pokedex} from '../src/Ejercicio-01/pokedex';
import {Combat} from '../src/Ejercicio-01/combat';


let poke1 = new Pokemon('Bulbasaur', 20, 20, 'hierba', 49, 49, 45, 45);
let poke2 = new Pokemon('Squirtle', 4, 17, 'agua', 48, 65, 13, 44);
let poke3 = new Pokemon('Pikachu', 20, 12, 'grass', 55, 40, 90, 35);
let poke4 = new Pokemon('Charmander', 23, 8, 'grass', 52, 58, 65, 39);
let vecPoke: Pokemon[] = [poke1, poke2, poke3];
// let result:Pokedex = new Pokedex([]);
// result.addPokemon(poke1);

let ataque = new Combat(poke1, poke2);
// ataque.start();

describe('Ejercicio 1', () => {
  describe('Clase Pokemon', () => {
    it('Son objetos Pokemon', () => {
      expect(poke1 instanceof Pokemon).to.be.true;
      expect(poke2 instanceof Pokemon).to.be.true;
      expect(poke3 instanceof Pokemon).to.be.true;
      expect(poke4 instanceof Pokemon).to.be.true;
    });
    it('Tiene un atributo name', () => {
      expect(poke1.name).to.be.eql('Bulbasaur');
    });
    it('Tiene un atributo weight', () => {
      expect(poke1.weight).to.be.eql(20);
    });
  });
});
