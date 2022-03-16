import 'mocha';
import {expect} from 'chai';
import {Racional} from '../src/Ejercicio_clase/racional';

describe('Ejercicio 1', () => {
  let prub: Racional;
  let prub1: Racional;
  beforeEach (() => {
    prub = new Racional(4, 8);
    prub1 = new Racional(3, 6);
  });
  describe('Clase Racional', () => {
    it(' Un número racional está formado por un numerador y un denominador', () => {
      expect(prub.num).to.be.equal(4);
      expect(prub.den).to.be.equal(8);
    });
    it('Un número racional no puede tener un denominador igual a cero', () => {
      let aux: Racional = new Racional(4, 0);
      expect(prub.den).not.to.be.eql(NaN);
      expect(aux.den).to.be.eql(NaN);
    });
    // it('Un número racional debe poder simplificarse.', () => {
    //   let prub2: Racional = new Racional(4, 8);
    //   prub2.simpl();
    //   // console.log(prub2.print());
    //   expect(prub2.simpl()).to.been.equal('1/2');
    // });
    // it('Un número racional debe poder invertirse.', () => {
    //   expect(numeroRa.invert()).to.be.eql();
    // });
    // it('Dos números racionales deben poder sumarse.', () => {
    //   expect(numeroRa.sum()).to.be.eql();
    // });
    // it('Dos números racionales deben poder restarse.', () => {
    //   expect(numeroRa.invert).to.be.eql();
    // });
  });
});
