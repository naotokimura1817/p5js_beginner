import p5 from "p5";

const sketch = (p: p5) => {

  p.setup = () => {
    p.createCanvas(2000, 2000, p.WEBGL)
    p.background(150)
    p.stroke(0, 50)
    p.fill(255, 200)
    let xStart = p.random(10)
    let yNoise = p.random(10)
    // p.translate(p.width/2, p.height/2, 0)
    for (let y = - (p.height/8); y <= (p.height/8); y += 3) {
      yNoise += 0.02
      let xNoise = xStart
      for (let x = -(p.width/8); x <= (p.width/8); x += 3) {
        xNoise += 0.02
        drawPoint(x, y, p.noise(xNoise, yNoise))
      }
    }
  }

  function drawPoint(x: number, y: number, noiseFactor: number) {
    p.push()
    p.translate(x * noiseFactor * 4, y * noiseFactor * 4, -y)
    let edgeSize = noiseFactor * 26
    p.ellipse(0, 0, edgeSize, edgeSize)
    p.pop()
  }
}

new p5(sketch)