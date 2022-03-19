const readlineSync = require('../../node_modules/readline-sync');
import {Fichas} from './fichas';

/**
 * Clase Tablero se encarga de las funcionalidades de un tablero
 */
export class Tablero {
  private tablero: Array<string[]>;
  private fichaNull: string;
  /**
   * El constructor se encarga de crear el tablero de `▄` indicando que esta
   * vació
   */
  constructor() {
    this.tablero = new Array<string[]>(6);
    this.fichaNull = new Fichas('▄').ficha;
    for (let i = 0; i < this.tablero.length; i++) {
      let vec: string[] = [];
      for (let j = 0; j < 7; j++) {
        vec.push(this.fichaNull);
      }
      this.tablero[i] = vec;
    }
  }
   /**
    * Se encarga de comprueba si una posición esta disponibles
    * @param fila fila de la posición
    * @param colum columna d ela posicione
    * @returns devuelve un true si esta disponible y un false en caso contrario.
    */
  isAvalible(fila: number, colum: number) {
    if ((this.tablero[fila][colum]) === '▄') {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Comprueba si el tablero esta todo ocupado
   * @returns devuelve true en caso de que tenga celdas disponible y false en el
   * caso contrario
   */
  colDispo() {
    for (let i = 0; i < this.tablero.length; i++) {
      if ((this.tablero[0][i]) === this.fichaNull) {
        return true;
      }
    }
    return false;
  }

  /**
   * Imprime el tablero
   */
  printTablero() {
    console.log();
    for (let i = 0; i < this.tablero.length; i++) {
      for (let j = 0; j < this.tablero[i].length; j++) {
        process.stdout.write(this.tablero[i][j] + ' ');
      }
      console.log();
    }
  }

  /**
   * Añade las fichas al tablero
   * @param colm columna a la que se añadira la ficha
   * @param jugador ficha del jugador
   * @returns devuelve la posición en caso que se agregue a la columa y -1 en el
   * caso que de que no.
   */
  addFicha(colm: number, jugador: string) {
    for (let i = 5; i >= 0; i--) {
      // console.log(i, colm);
      if (this.isAvalible(i, colm - 1)) {
        this.tablero[i][colm - 1] = jugador;
        return i;
      }
    }
    return -1;
  }
  /**
   * Comprueba si hay 4 fichas iguales seguidas horizontalmente
   * @param fil fila de la posición
   * @param ficha ficha del jugador
   * @returns devuelve true si hay coincidencia y false si no hay.
   */
  horCheck(fil: number, ficha: string): boolean {
    let count: number = 0;
    for (let i = 0; i < 7; i++) {
      if (this.tablero[fil][i] === ficha) {
        count++;
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

  /**
   * Compruba si hay 4 fichas iguales seguidas verticalmente
   * @param col columna de la posición
   * @param ficha ficha del jugador
   * @returns devuelve true si hay coincidencia y false si no hay.
   */
  verCheck(col: number, fichas: string): boolean {
    let count: number = 0;
    // this.tablero[0][col]
    for (let i = 0; i < 6; i++) {
      if (this.tablero[i][col] === fichas) {
        count++;
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

  /**
   * Se encarga de comprobar si hay cuatro fichas seguidas diagonalmente hacia
   * la derecha `/`
   * @param fil fila de la ficha
   * @param col columna de la ficha
   * @param ficha ficha del jugador
   * @returns devuelve true si hay coincidencia y false si no hay.
   */
  diagDerCheck(fil: number, col: number, ficha: string) {
    let endcol = (fil + col);
    let starCol = 0;
    let startfil = 0;
    // let auxNum: number = 0;
    if (endcol > 6) {
      startfil = endcol - 6;
      starCol = endcol - startfil;
    } else {
      starCol = endcol;
    }
    let count: number = 0;
    for (let i = startfil, j = starCol; i < 6 && j >= 0; i++, j--) {
      if (this.tablero[i][j] === ficha) {
        count++;
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

  /**
   * Se encarga de comprobar si hay cuatro fichas seguidas diagonalmente hacia
   * la izquierda `\`
   * @param fil fila de la ficha
   * @param col columna de la ficha
   * @param ficha ficha del jugador
   * @returns devuelve true si hay coincidencia y false si no hay.
   */
  diagIzqCheck(fil: number, col: number, ficha: string): boolean {
    let endcol = (fil - col);
    let starCol = 0;
    let startfil = 0;
    if (endcol < 0) {
      endcol = (col - fil);
      starCol = endcol;
    } else {
      startfil = endcol;
    }
    let count: number = 0;
    for (let i = startfil, j = starCol; i < 6 && j < 7; i++, j++) {
      if (this.tablero[i][j] === ficha) {
        count++;
      } else {
        count = 0;
      }
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

/**
   * Se encarga de comprobar si alguna de los métodos diagIzqCheck, verCheck,
   * horCheck y diagDerCheck, devuelve true, en caso de que si devover true y en caso contrario false
   * @param fil fila de la ficha introducida
   * @param col columna de la ficha introducida
   * @param ficha ficha del jugador
   * @returns devuelve true, en caso de que algún método devuelva true, devolverá true y en caso contrario false
   */
  winnerCheck(fil: number, col: number, ficha: string) {
    if (this.diagDerCheck(fil, col - 1, ficha) || this.horCheck(fil, ficha) || this.verCheck(col - 1, ficha) || this.diagIzqCheck(fil, col - 1, ficha)) {
      return true;
    } else {
      return false;
    }
  }
}

// let teb = new Tablero();
// // teb.printTablero();
// // console.log(teb.isAvalible(0, 0));
// // teb.addFicha(1, 'x');
// teb.doAll(7, 'x');
// teb.doAll(7, 'x');
// teb.doAll(7, 'x');
// teb.doAll(7, 'x');
// teb.doAll(7, 'x');
// teb.doAll(6, 'x');
// teb.doAll(6, 'x');
// teb.doAll(6, 'x');
// teb.doAll(6, 'x');
// // teb.doAll(1, 'x');
// teb.doAll(5, 'x');
// teb.doAll(5, 'x');
// teb.doAll(5, 'x');
// teb.doAll(2, 'x');
// teb.doAll(3, 'x');
// teb.doAll(3, 'x');
// teb.doAll(3, 'x');
// teb.doAll(4, 'x');
// teb.doAll(4, 'x');
// teb.doAll(1, 'x');
// // teb.doAll(1, 'x');
// // console.log(teb.diagDerCheck(4, 1, 'x'));
// // console.log(teb.diagIzqCheck(4, 1, 'x'));
// // teb.doAll(1, 'x');
// // teb.doAll(1, 'x');

