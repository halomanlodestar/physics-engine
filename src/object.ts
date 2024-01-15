import {Vector2} from "./vector.ts";

export class Object {

  public velocity = new Vector2(0, 0);
  constructor(
    public position: Vector2,
    public geometry: (ctx: CanvasRenderingContext2D, position: Vector2) => void,
    public mass: number
    ) {
  }
  public render(ctx: CanvasRenderingContext2D) {
    this.geometry(ctx, this.position);
    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }

  public gravity(force: number) {
    const acceleration = (force / this.mass);
    this.velocity.y += acceleration;
  }
}

export const PrimitiveObjects = {
  circle: (ctx: CanvasRenderingContext2D, position: Vector2) => {
  ctx.beginPath();
  ctx.arc(position.x, position.y, 20, 0, Math.PI * 2);
  ctx.fillStyle = "red";
  ctx.fill();
  }
}