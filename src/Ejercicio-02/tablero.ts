const readlineSync = require('../../node_modules/readline-sync');
import {Fichas} from './jugador';

export class Tablero {
  private tablero: Array<string[]>;
  private fichaNull: string;
  // private ultCol: number;
  // private ultFil: number;
  constructor() {
    this.tablero = new Array<string[]>(6);
    this.fichaNull = new Fichas('*').getFichas();
    for (let i = 0; i < this.tablero.length; i++) {
      let vec: string[] = [];
      for (let j = 0; j < 7; j++) {
        // this.tablero[i].push(this.fichaNull);
        vec.push(this.fichaNull);
      }
      this.tablero[i] = vec;
      // this.tablero[i] = [this.fichaNull, this.fichaNull, this.fichaNull, this.fichaNull, this.fichaNull, this.fichaNull, this.fichaNull];
    }
  }

  isAvalible(fila: number, colum: number) {
    // console.log(this.tablero[fila][colum]);
    if ((this.tablero[fila][colum]) === '*') {
      return true;
    } else {
      // console.log('falsooo', this.tablero[fila][colum]);
      return false;
    }
  }

  colDispo() {
    for (let i = 0; i < this.tablero.length; i++) {
      if ((this.tablero[0][i]) === this.fichaNull) {
        return true;
      }
    }
    return false;
  }

  printTablero() {
    console.log();
    for (let i = 0; i < this.tablero.length; i++) {
      for (let j = 0; j < this.tablero[i].length; j++) {
        process.stdout.write(this.tablero[i][j] + ' ');
      }
      console.log();
    }
  }

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

  verCheck(col: number, fichas: string): boolean {
    let count: number = 0;
    // this.tablero[0][col]
    for (let i = 0; i < 6; i++) {
      // console.log(this.tablero[i][col]);
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
    // console.log(startfil, starCol);
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

  diagIzqCheck(fil: number, col: number, ficha: string): boolean {
    // console.log(fil, col);
    let endcol = (fil - col);
    let starCol = 0;
    let startfil = 0;
    // let auxNum: number = 0;
    if (endcol < 0) {
      endcol = (col - fil);
      starCol = endcol;
    } else {
      startfil = endcol;
    }
    let count: number = 0;
    // console.log(startfil, starCol);
    for (let i = startfil, j = starCol; i < 6 && j < 7; i++, j++) {
      // console.log(i, j, ':');
      if (this.tablero[i][j] === ficha) {
        // console.log(i, j, '=');
        count++;
        // console.log(count);
      } else {
        count = 0;
      }
      // console.log(count);
      if (count === 4) {
        return true;
      }
    }
    return false;
  }

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

