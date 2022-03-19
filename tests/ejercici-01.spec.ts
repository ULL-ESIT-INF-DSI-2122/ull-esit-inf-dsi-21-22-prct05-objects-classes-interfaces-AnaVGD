import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/Ejercicio-01/pokemon';
import {Pokedex} from '../src/Ejercicio-01/pokedex';
import {Combat} from '../src/Ejercicio-01/combat';

describe('Ejercicio 1', () => {
  let poke1: Pokemon;
  let poke2: Pokemon;
  let poke3: Pokemon;
  let poke4: Pokemon;
  let poke5: Pokemon;
  let poke: Pokedex;
  let vecPoke: Pokemon[];
  let ataque: Combat;
  let ataque1: Combat;
  beforeEach (() => {
    poke1 = new Pokemon('Bulbasaur', 20, 20, 'hierba', 49, 49, 45, 45);
    poke2 = new Pokemon('Squirtle', 4, 17, 'agua', 48, 65, 13, 44);
    poke3 = new Pokemon('Pikachu', 20, 12, 'heriva', 55, 40, 90, 35);
    poke4 = new Pokemon('Charmander', 23, 8, 'hierva', 52, 58, 65, 39);
    poke5 = new Pokemon('Charmander', 23, 8, 'nada', 52, 58, 65, 39);
    vecPoke = [poke1, poke2, poke3];
    poke = new Pokedex(vecPoke);
    ataque = new Combat(poke1, poke2);
    ataque1 = new Combat(poke1, poke5);
  });
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
    it('Tiene un atributo attack', () => {
      expect(poke1.attack).to.be.eql(49);
    });
    it('Tiene un atributo height', () => {
      expect(poke1.height).to.be.eql(20);
    });
    it('Tiene un atributo weight', () => {
      expect(poke1.weight).to.be.eql(20);
    });
    it('Tiene un atributo type', () => {
      expect(poke1.type).to.be.eql('hierba');
    });
    it('Tiene un atributo defense', () => {
      expect(poke1.defense).to.be.eql(49);
    });
    it('Tiene un atributo speed', () => {
      expect(poke1.speed).to.be.eql(45);
    });
    it('Tiene un atributo hp', () => {
      expect(poke1.hp).to.be.eql(45);
    });
  });
  describe('Clase Pokedex', () => {
    it('Es objetos Pokedex', () => {
      expect(poke instanceof Pokedex).to.be.true;
    });
    it('Tiene un atributo pokedex', () => {
      expect(poke.pokedex).to.be.eql([poke1, poke2, poke3]);
    });
    it('Permite añadir pokemons', () => {
      expect(poke.addPokemon(poke4)).to.be.eql('incluido');
    });
    it('No permite añadir pokemons exitentes', () => {
      expect(poke.addPokemon(poke3)).to.be.eql('Ya existe');
    });
  });
  describe('Clase Combat', () => {
    it('Es objetos Pokedex', () => {
      expect(ataque instanceof Combat).to.be.true;
    });
    it('Tiene un atributo contrincante1', () => {
      expect(ataque.contrincante1).to.be.eql(poke1);
    });
    it('Contricante1 es un pokemon', () => {
      expect(ataque.contrincante1 instanceof Pokemon).to.be.true;
    });
    it('Tiene un atributo contrincante2', () => {
      expect(ataque.contrincante2).to.be.eql(poke2);
    });
    it('Contricante 2 es un pokemon', () => {
      expect(ataque.contrincante2 instanceof Pokemon).to.be.true;
    });
    it('start() devuelve un string', () => {
      expect(typeof ataque.start(false)).to.be.a('string');
    });
    it('No permite añadir pokemons erroneos', () => {
      expect(ataque1.start(false)).to.be.eql('Tipo de Pokemon erroneo');
    });
    it('Funciona correctamente', () => {
      expect(ataque.start(false)).to.be.eql('Muere Bulbasaur');
    });
  });
});
