import {Object} from "./object.ts";

export class MainFrame {

  private objects: Object[] = [];
  public ctx: CanvasRenderingContext2D;
  constructor(public canvas: HTMLCanvasElement) {
    this.ctx = canvas.getContext("2d")!
  }

  public addObject(object: Object) {
    this.objects.push(object)
  }

  set bounds([width, height]: [number, number]) {
    [this.canvas.width, this.canvas.height] = [width, height];
  }

  public render() {

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

    for (const object of this.objects) {
      object.render(this.ctx)
    }

  }


}