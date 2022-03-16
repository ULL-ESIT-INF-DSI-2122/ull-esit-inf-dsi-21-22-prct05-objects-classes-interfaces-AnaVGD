var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
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
        var _this = this;
        var check = false;
        var _loop_1 = function () {
            if (this_1.addFicha(colm, jugador)) {
                this_1.printTablero();
                check = true;
            }
            else {
                var prompts_1 = require('prompts');
                (function () { return __awaiter(_this, void 0, void 0, function () {
                    var response;
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, prompts_1({
                                    type: 'number',
                                    name: 'col',
                                    message: 'La columna está completa, incerta otra columna'
                                })];
                            case 1:
                                response = _a.sent();
                                colm = response.col;
                                return [2 /*return*/];
                        }
                    });
                }); })();
            }
        };
        var this_1 = this;
        while (!check) {
            _loop_1();
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
