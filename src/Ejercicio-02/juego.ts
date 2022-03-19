const readlineSync = require('../../node_modules/readline-sync');
import {Tablero} from './tablero';
import {Fichas} from './fichas';

/**
 * Interfaz Jugadores
 */
export interface Jugadores {
  jugadores: [Fichas, Fichas]
}

/**
 * Clase juego es la encargada de iniciar el jugo
 */
export class Juego implements Jugadores {
  // private jugador2: string;
  private tablero: Tablero;
  /**
   * Al constructor se le pasa los jugadores un tupla con las finchas de los
   * jugadores
   * @param jugadores Tupla con las fichas de los jugadores, de tipo fichas
   * @param tablero Teblero del juego
   */
  constructor(public jugadores: [Fichas, Fichas]) {
    // this.jugadores = [player1, player2];
    this.tablero = new Tablero();
  }

  /**
   * Metodoencargado de todo el juego es el que llama a las demás clases.
   * @param print booleano que indica se se quiere imprimir por consola el
   * procedimiento
   * @returns Devuelve un string indicando quien ah ganado o se hay algún error
   */
  inicio(print: boolean, colm: number = -1): string {
    if (print) {
      console.log('Bienvenidos a conecta cuatro');
      console.log(`Jugador 1 seras "${this.jugadores[0].ficha}"`);
      console.log(`Jugador 2 seras "${this.jugadores[1].ficha}"`);
    }
    let turno = 0;
    let result: boolean = false;
    let count: number = 0;
    while (!result && count <= 27) {
      if (print) {
        colm = -1;
        console.log(`Turno del jugador ${turno + 1}`);
        while (!(colm <= 7) || !(colm > 0)) {
          colm = readlineSync.question('Inserte el numero de la columna del 1-7 = ');
          // console.log(colm);
        }
      }
      result = this.aJugar(colm, this.jugadores[turno].ficha, print);
      if (result) {
        return `Gana el jugador ${turno + 1}`;
      }
      // this.tablero.printTablero();
      if (turno === 0) {
        count++;
        // if (!print) colm += 2;
        turno++;
      } else {
        if (!print) colm++;
        turno--;
      }
    }
    return 'No hay ganador';
  }

  /**
   * aJugar se encarga de llamar a los métodos de la clase tablero, añade las
   * fichas en la columnas indicadas opr el jugador y comprueba si a ganado algún
   * jugador
   * @param colm columna a agregar ficha
   * @param jugador ficha del jugador
   * @param print bool para indicar se se quiere ver el procedimiento del juego
   * @returns devuelve si alguien a ganado o si no hay ganador.
   */
  aJugar(colm: number, jugador: string, print: boolean): boolean {
    let check = false;
    while (!check) {
      const result = this.tablero.addFicha(colm, jugador);
      if (result === -1) {
        // console.log('Columna llena');
        // colm = readlineSync.question('Columna llena ');
        if (!this.tablero.colDispo()) {
          if (print) console.log('Todo el tablero lleno, nadie gana');
          return false;
        }
        colm = -1;
        // console.log(print);
        while (!(colm <= 7) || !(colm > 0)) {
          if (print) {
            colm = readlineSync.question('Columna llena, introduzca de nuevo la columna = ');
          } else {
            colm += 2;
            // console.log('hi');
          }
        }
      } else {
        check = true;
        if (print) this.tablero.printTablero();
        if (this.tablero.winnerCheck(result, colm, jugador)) {
          return true;
        };
      }
    }
    return false;
  }
}

// let teb = new Tablero();
// let fichas: [Fichas, Fichas] = [new Fichas('x'), new Fichas('o')];
// // let ficha2 =;
// // let table = new Tablero();
// let play = new Juego(fichas);
// console.log(play.inicio(true));
