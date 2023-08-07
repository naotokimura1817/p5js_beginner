import p5 from "p5"

const sketch = (p: p5) => {

  p.setup = () => {
    p.createCanvas(800, 800)
    p.smooth()
    p.background(255)

    let xStart = p.random(10)
    let xNoise = xStart
    let yNoise = p.random(10)

    for (let y = 0; y <= p.height; y += 1) {
      yNoise += 0.01
      xNoise = xStart
      for (let x = 0; x <= p.width; x += 1) {
        xNoise += 0.01
        let alph =p.noise(xNoise, yNoise) * 255
        p.stroke(0, alph)
        p.line(x, y, x + 1, y + 1)
      }
    }
  }
}

new p5(sketch)