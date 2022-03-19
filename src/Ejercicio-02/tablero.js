var Tablero = /** @class */ (function () {
    // private ultCol: number;
    // private ultFil: number;
    function Tablero() {
        this.tablero = new Array(6);
        for (var i = 0; i < this.tablero.length; i++) {
            this.tablero[i] = ['0', '0', '0', '0', '0', '0', '0'];
        }
    }
    Tablero.prototype.isAvalible = function (fila, colum) {
        if ((this.tablero[fila][colum]) === '0') {
            return true;
        }
        else {
            return false;
        }
    };
    Tablero.prototype.printTablero = function () {
        console.log();
        for (var i = 0; i < this.tablero.length; i++) {
            for (var j = 0; j < this.tablero[i].length; j++) {
                process.stdout.write(this.tablero[i][j] + ' ');
            }
            console.log();
        }
    };
    Tablero.prototype.addFicha = function (colm, jugador) {
        for (var i = this.tablero.length - 1; i >= 0; i--) {
            // console.log(i, colm);
            if (this.isAvalible(i, colm - 1)) {
                this.tablero[i][colm - 1] = jugador;
                return true;
            }
        }
        return false;
    };
    Tablero.prototype.doAll = function (colm, jugador) {
        var check = false;
        while (!check) {
            if (this.addFicha(colm, jugador)) {
                this.printTablero();
                check = true;
            }
            else {
                process.stdout.write('Columna llena, introduce una nueva');
                process.stdin.on('newColum', function (newCol) {
                    colm = newCol;
                    process.exit();
                });
            }
        }
    };
    return Tablero;
}());
var teb = new Tablero();
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
teb.doAll(1, 'x');
