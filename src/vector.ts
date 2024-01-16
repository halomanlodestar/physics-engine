class Vector {}

export class Vector2 extends Vector {

  public magnitude: number;
  constructor(public x: number, public y: number) {
    super();
    this.magnitude = Math.sqrt(this.x**2 + this.y**2);
  }
}