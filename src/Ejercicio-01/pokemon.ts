/**
 * Interfaz BasicStatistics
 */
interface BasicStatistics {
  attack: number
  defense: number
  speed: number
  hp: number
}

/**
 * Clase Pokemon
 */
export class Pokemon implements BasicStatistics {
  constructor(public readonly name:string, public readonly weight: number,
    public readonly height: number, public readonly type: string,
    public readonly attack: number, public readonly defense: number,
    public readonly speed: number, public readonly hp: number) {
  }
}
