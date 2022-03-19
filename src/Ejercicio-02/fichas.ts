/**
 * Clase fichas se encarga de almacenar el color de un ficha
 */
export class Fichas {
  /**
   * El constructor recibe la propiedad color que es un strig con un carácter
   * que indica el color de la ficha.
   * @param color carácter que sera la ficha
   */
  constructor(private _ficha: string) {
  }

  public get ficha(): string {
    return this._ficha;
  }
}
