import { Vector2 } from "./vector.ts";

export class Line {
  public length: number;
  public slope: number;
  public normal: Vector2;

  constructor(
    public start: Vector2,
    public end: Vector2,
  ) {
    this.length = Math.sqrt(
      (this.start.x - this.end.x) ** 2 + (this.start.y - this.end.y) ** 2,
    );
    this.slope = (this.end.y - this.start.x) / (this.end.x - this.start.x);
    this.normal = new Vector2(1, -1 / this.slope);
  }

  render(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.moveTo(this.start.x, this.start.y);
    ctx.lineTo(this.end.x, this.end.y);
    ctx.strokeStyle = "purple";
    ctx.stroke();
  }
}
