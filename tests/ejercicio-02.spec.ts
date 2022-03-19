import 'mocha';
import {expect} from 'chai';
import {Fichas} from '../src/Ejercicio-02/fichas';
import {Tablero} from '../src/Ejercicio-02/tablero';
import {Juego, Jugadores} from '../src/Ejercicio-02/juego';

describe('Ejercicio 2', () => {
  let tab: Tablero;
  let tabAux: Tablero;
  let fichaX : Fichas;
  let fichaO : Fichas;
  let jugadores: [Fichas, Fichas];
  let jugar: Juego;
  let jugar1: Juego;

  beforeEach (() => {
    tab = new Tablero();
    tabAux = new Tablero();
    fichaX = new Fichas('x');
    fichaO = new Fichas('o');
    for (let i = 1; i <= 7; i++) {
      for (let j = 0; j < 6; j++) {
        tabAux.addFicha(i, fichaO.ficha);
      }
    }
    jugadores = [fichaX, fichaO];
    jugar = new Juego(jugadores);
    jugar1 = new Juego(jugadores);
  });
  describe('Clase Fichas', () => {
    it('Son objetos Pokemon', () => {
      expect(fichaO instanceof Fichas).to.be.true;
      expect(fichaX instanceof Fichas).to.be.true;
    });
    it('Tiene un atributo ficha', () => {
      expect(fichaO.ficha).to.be.eql('o');
    });
  });
  describe('Clase Tablero', () => {
    it('Es objetos Pokedex', () => {
      expect(tab instanceof Tablero).to.be.true;
    });
    it('Metodo isAvalible', () => {
      expect(tab.isAvalible(0, 0)).to.be.true;
    });
    it('Se pueden añadir fichas, no añade si esta llena la columna', () => {
      for (let i = 5; i >= -1; i--) {
        expect(tab.addFicha(1, fichaO.ficha)).to.be.eql(i);
      }
    });
    it('Comprueba que la tabala no este llena', () => {
      expect(tabAux.colDispo()).to.be.false;
      expect(tab.colDispo()).to.be.true;
    });
    it('Hay un ganador horizontal', () => {
      expect(tabAux.horCheck(3, fichaO.ficha)).to.be.true;
      expect(tab.horCheck(0, fichaO.ficha)).to.be.false;
    });
    it('Hay un ganador vertical', () => {
      expect(tabAux.verCheck(3, fichaO.ficha)).to.be.true;
      expect(tab.verCheck(0, fichaO.ficha)).to.be.false;
    });
    it('Hay un ganador diagonal derecha', () => {
      expect(tabAux.diagDerCheck(3, 4, fichaO.ficha)).to.be.true;
      expect(tab.diagDerCheck(0, 0, fichaO.ficha)).to.be.false;
    });
    it('Hay un ganador diagonal izquierda', () => {
      expect(tabAux.diagIzqCheck(3, 4, fichaO.ficha)).to.be.true;
      expect(tab.diagIzqCheck(0, 0, fichaO.ficha)).to.be.false;
    });
    it('Hay un ganador', () => {
      expect(tabAux.winnerCheck(0, 0, fichaO.ficha)).to.be.true;
      expect(tab.winnerCheck(0, 0, fichaO.ficha)).to.be.false;
    });
  });
  describe('Clase juego', () => {
    it('Es objetos Juego', () => {
      expect(jugar instanceof Juego).to.be.true;
    });
    it('Tiene un atributo jugadores', () => {
      expect(jugar.jugadores).to.been.eql([fichaX, fichaO]);
    });
    it('aJuagr es un funcion', () => {
      expect(jugar.aJugar).to.be.a('function');
    });
    it('aJuagr funciona correctamente', () => {
      expect(jugar.aJugar(1, fichaO.ficha, false)).to.be.false;
      for (let i = 2; i < 4; i++) {
        jugar.aJugar(i, fichaO.ficha, false);
      }
      expect(jugar.aJugar(4, fichaO.ficha, false)).to.be.true;
    });
    it('inicio es un función', () => {
      expect(jugar.inicio).to.be.a('function');
    });
    it('Inicio funciona correctamente', () => {
      expect(jugar.inicio(false, 1)).to.be.eql('Gana el jugador 1');
    });
  });
});
