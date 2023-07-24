// code 1.2
import p5 from "p5";

const sketch = (p: p5) => {
  let a = 10
  let b = 7
  let scalar = 50
  a *= scalar
  b *= scalar

  let wd = b
  let xPos = 0
  let yPos = 0
  let itr = 0

  let col
  p.colorMode(p.HSB, 1)

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight)
  }
  
  p.draw = () => {
    while (wd > 0) {
      itr++
      if (itr % 2 === 1) {
        while (xPos + wd <= a) {
          col = p.color(p.random(1), 1, 1)
          p.fill(col)
          p.rect(xPos, yPos, wd, wd)
          xPos += wd
        }
        wd = a - xPos
      } else {
        while (yPos + wd <= b) {
          col = p.color(p.random(1), 1, 1)
          p.fill(col)
          p.rect(xPos, yPos, wd, wd)
          yPos += wd
        }
        wd = b - yPos
      }
    }
  }
}

new p5(sketch)
