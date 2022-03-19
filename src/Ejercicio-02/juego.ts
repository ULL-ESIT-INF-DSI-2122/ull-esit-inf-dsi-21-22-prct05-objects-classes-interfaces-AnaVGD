const readlineSync = require('../../node_modules/readline-sync');
import {Tablero} from './tablero';
import {Fichas} from './jugador';


class Juego {
  // private jugador2: string;
  private tablero: Tablero;
  constructor(private jugadores: [Fichas, Fichas]) {
    // this.jugadores = [player1, player2];
    this.tablero = new Tablero();
  }

  inicio(): string {
    console.log('Bienvenidos a conecta cuatro');
    console.log('Jugador 1 seras "x"');
    console.log('Jugador 2 seras "o"');
    let turno = 0;
    let result: boolean = false;
    // let fila: number = readlineSync.question('inserte numero la fila del 1-7');
    while (!result) {
      let colm: number = -1;
      console.log(`Turno del jugador ${turno + 1}`);
      while (!(colm <= 7) || !(colm > 0)) {
        colm = readlineSync.question('Inserte el numero de la columna del 1-7 = ');
        // console.log(colm);
      }
      result = this.aJugar(colm, this.jugadores[turno].getFichas());
      if (result) {
        return `Gana el jugador ${turno + 1}`;
      }
      if (turno === 0) {
        turno++;
      } else {
        turno--;
      }
    }
    return 'No hay ganador';
  }

  aJugar(colm: number, jugador: string): boolean {
    let check = false;
    while (!check) {
      let result = this.tablero.addFicha(colm, jugador);
      if (result === -1) {
        // console.log('Columna llena');
        // colm = readlineSync.question('Columna llena ');
        if (!this.tablero.colDispo()) {
          console.log('Todo el tablero lleno, nadie gana');
          return false;
        }
        colm = -1;
        while (!(colm <= 7) || !(colm > 0)) {
          colm = readlineSync.question('Columna llena, introduzca de nuevo la columna = ');
        }
      } else {
        check = true;
        console.log('hi');
        this.tablero.printTablero();
        if (this.tablero.winnerCheck(result, colm, jugador)) {
          // return `Gana ${jugador}`;
          return true;
        };
      }
    }

    return false;
  }
}

// // let teb = new Tablero();
// let fichas: [Fichas, Fichas] = [new Fichas('x'), new Fichas('o')];
// // let ficha2 =;
// let tab = new Juego(fichas);
// console.log(tab.inicio());
