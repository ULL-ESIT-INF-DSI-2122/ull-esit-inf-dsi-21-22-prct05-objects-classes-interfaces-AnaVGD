
class Tablero {
  public tablero: Array<string[]>;
  // private ultCol: number;
  // private ultFil: number;
  constructor() {
    this.tablero = new Array<string[]>(6);
    for (let i = 0; i < this.tablero.length; i++) {
      this.tablero[i] = ['0', '0', '0', '0', '0', '0', '0'];
    }
  }

  isAvalible(fila: number, colum: number) {
    if ((this.tablero[fila][colum]) === '0') {
      return true;
    } else {
      return false;
    }
  }

  printTablero() {
    console.log()
    for (let i = 0; i < this.tablero.length; i++) {
      for (let j = 0; j < this.tablero[i].length; j++) {
        process.stdout.write(this.tablero[i][j] + ' ');
      }
      console.log();
    }
  }
  addFicha(colm: number, jugador: string) {
    for (let i = this.tablero.length - 1; i >= 0; i--) {
      // console.log(i, colm);
      if (this.isAvalible(i, colm-1)) {
        this.tablero[i][colm - 1] = jugador;
        return true;
      }
    }
    return false;
  }
  doAll(colm: number, jugador: string) {
    let check = false;
    while (!check) {
      if (this.addFicha(colm, jugador)) {
        this.printTablero();
        check = true;
      } else {
        const prompts = require('prompts');
        (async () => {
          const response = await prompts({
            type: 'number',
            name: 'col',
            message: 'La columna está completa, incerta otra columna',
          });
        })();
      }
    }
  }
}

let teb = new Tablero();
// teb.printTablero();
// console.log(teb.isAvalible(0, 0));
// teb.addFicha(1, 'x');
teb.doAll(1, 'x');
teb.doAll(1, 'x');
teb.doAll(1, 'x');
teb.doAll(1, 'x');
teb.doAll(1, 'x');
teb.doAll(1, 'x');
teb.doAll(1, 'x');

