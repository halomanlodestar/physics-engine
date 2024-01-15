import {MainFrame} from "./MainFrame.ts";
import {Object, PrimitiveObjects} from "./object.ts";
import {Vector2} from "./vector.ts";

const canvas = document.querySelector("canvas")!

const mainFrame = new MainFrame(canvas)
mainFrame.bounds = [window.innerWidth - 100, window.innerHeight - 100]

const ball = new Object(new Vector2(50, 60), PrimitiveObjects.circle, 50)
ball.gravity(60)
mainFrame.addObject(ball)

function animate() {
  mainFrame.render()
  requestAnimationFrame(animate)
}
animate()
