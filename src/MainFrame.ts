import { Object } from "./object.ts";
import { Line } from "./Line.ts";

export class MainFrame {
  private objects: Object[] = [];
  private lines: Line[] = [];
  public ctx: CanvasRenderingContext2D;
  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d")!;
  }

  public addObject(object: Object) {
    this.objects.push(object);
  }

  public addLine(line: Line) {
    this.lines.push(line);
  }

  set bounds([width, height]: [number, number]) {
    [this.canvas.width, this.canvas.height] = [width, height];
  }

  public render() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (const line of this.lines) {
      line.render(this.ctx);
    }

    for (const object of this.objects) {
      object.render(this.ctx);
    }
  }
}
