
export class Fichas {
  private ficha: string;
  constructor(private color: string) {
    this.ficha = color;
  }
  getFichas() {
    return this.ficha;
  }
}
