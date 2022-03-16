/**
 * Clase Racional
 */
export class Racional {
  /**
   * Recibe un numerodo y un denominador
   * @param num numerador
   * @param den denominador
   */
  constructor(public num: number, public den: number) {
    if (!Number.isInteger(num) && !Number.isInteger(den)) {
      // throw new Error('numeros no enteros o denominador');
      this.num = NaN;
      this.den = NaN;
    } else if (den === 0) {
      // throw new Error('denominador es 0');
      this.den = NaN;
    }
  }
  /**
   * Simplifica racionales
   */
  simpl() {
    // let auxNum = 0;
    // let auxDen = 0;
    while (this.num % 2 === 0 && this.den % 2 === 0) {
      this.num /= 2;
      this.den /= 2;
    }
    return this;
  }
  /**
   * Invierte el numerodor por el denominador y el denomidor por el numerador
   */
  inver() {
    let auxNum = this.num;
    this.num = this.den;
    this.den = auxNum;
    this.print();
  }

  /**
   * Suma de racioneles
   * @param numero2 segundo numero a sumar
   * @returns devuelve un racional resultante
   */
  suma(numero2: Racional) {
    let result: Racional = new Racional(1, 1);
    result.num = (this.num * numero2.den) + (this.den * numero2.num);
    result.den = this.den * numero2.den;
    return result;
  }
  /**
   * Resta de racionales
   * @param numero2 Segundo numero a restar
   * @returns devuelve un racional resultante
   */
  resta(numero2: Racional) {
    let result: Racional = new Racional(1, 1);
    result.num = (this.num * numero2.den) - (this.den * numero2.num);
    result.den = this.den * numero2.den;
    return result;
  }
  /**
   * Multiplicación de racionales
   * @param numero2 Segundo numero a multiplicar
   * @returns devuelve un racional resultante
   */
  mult(numero2: Racional) {
    let result: Racional = new Racional(1, 1);
    result.den = this.den * numero2.den;
    result.num = this.num * numero2.num;
    return result;
  }

  /**
   * División de racionales
   * @param numero2 Segundo numero a dividir
   * @returns devuelve un racional resultante
   */
  div(numero2: Racional) {
    let result: Racional = new Racional(1, 1);
    result.den = this.den * numero2.num;
    result.num = this.num * numero2.den;
    return result;
  }
  /**
   * Imprime por pantalla el racional
   */
  print() {
    // console.log(String(this.num) + '/' + String(this.den));
    return String(this.num) + '/' + String(this.den);
  }

  /**
   * Se obtiene el equivalente a un número racional como un número en notación
   * de punto fijo, cuyo número de decimales debe ser un argumento.
   * @param decimales número de decimales debe ser un argumento.
   * @returns Numero en notacion punto fijo con n decimales
   */
  puntoFijo(decimales: number) {
    return (this.num / this.den).toFixed(decimales);
  }
}


let prub: Racional = new Racional(4, 8);
let prub1: Racional = new Racional(3, 6);
// console.log(prub,print);
prub.inver();
// prub.div(prub1).print();
// console.log(prub.puntoFijo(2));
// prub.print();
