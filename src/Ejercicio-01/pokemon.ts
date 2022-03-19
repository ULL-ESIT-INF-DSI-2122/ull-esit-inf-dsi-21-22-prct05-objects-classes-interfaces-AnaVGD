/**
 * Interfaz BasicStatistics
 * Contiene las estadísticas básicas de un pokemon
 */
interface BasicStatistics {
  attack: number
  defense: number
  speed: number
  hp: number
}

/**
 * Clase `Pokemon`, se encarga de los elementos de un pokemon
 */

export class Pokemon implements BasicStatistics {
  /**
   * Constructor de la clase, se le pasan los elementos del pokemon
   * @param _name Nombre
   * @param _weight Peso
   * @param _height Altura
   * @param _type Tipo
   * @param _attack Ataque
   * @param _defense Defensa
   * @param _speed Velocidad
   * @param _hp Daño máximo
   */
  constructor(private readonly _name: string, private readonly _weight: number,
    private readonly _height: number, private readonly _type: string,
    private readonly _attack: number, private readonly _defense: number,
    private readonly _speed: number, private readonly _hp: number) {
  }
  /**
   * Getters del atributo hp
   * @returns devuelve el atributo _hp
   */
  public get hp(): number {
    return this._hp;
  }
 /**
   * Getters del atributo speed
   * @returns devuelve el atributo _speed
   */
  public get speed(): number {
    return this._speed;
  }
  /**
   * Getters del atributo _defense
   * @returns devuelve el atributo _defense
   */
  public get defense(): number {
    return this._defense;
  }
  /**
   * Getters del atributo _attack
   * @returns devuelve el atributo _attack
   */
  public get attack(): number {
    return this._attack;
  }
  /**
   * Getters del atributo _type
   * @returns devuelve el atributo _type
   */
  public get type(): string {
    return this._type;
  }
  /**
   * Getters del atributo _weight
   * @returns devuelve el atributo _weight
   */
  public get weight(): number {
    return this._weight;
  }
  /**
   * Getters del atributo _name
   * @returns devuelve el atributo _name
   */
  public get name(): string {
    return this._name;
  }
  /**
   * Getters del atributo _height
   * @returns devuelve el atributo _height
   */
  public get height(): number {
    return this._height;
  }
}
