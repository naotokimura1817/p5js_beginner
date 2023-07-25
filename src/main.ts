import p5 from "p5";

const sketch = (p: p5) => {
  let a = 10
  let b = 13
  let ratio = b / a
  let thr = 40

  p.setup = () => {
    p.createCanvas(700, 700)
    p.colorMode(p.HSB, 1)
    divSquare(0, 0, p.width)
  }
  
  p.draw = () => {
    // divSquare(0, 0, p.width)
  }

  function divSquare(xPos: number, yPos: number, wd: number): void {
    let itr = 0
    let xEndPos = wd + xPos
    let yEndPos = wd + yPos
    
    p.fill(p.color(p.random(1), 1, 1))
    p.rect(xPos, yPos, wd ,wd)

    while (wd > thr) {
      itr++
      if (itr % 2 === 1) {
        while (xPos + wd * ratio < xEndPos + 0.1) {
          divRect(xPos, yPos, wd * ratio)
          xPos += wd * ratio
        }
        wd = xEndPos - xPos
      } else {
        while (yPos + wd / ratio < yEndPos + 0.1) {
          divRect(xPos, yPos, wd)
          yPos += wd / ratio
        }
        wd = yEndPos - yPos
      }
    }
  }

  function divRect(xPos: number, yPos: number, wd: number) {
    let itr = 0
    let xEndPos = xPos + wd
    let yEndPos = yPos + wd / ratio

    p.fill(p.color(p.random(1), 1, 1))
    p.rect(xPos, yPos, wd, wd / ratio)

    while (wd > thr) {
      itr++
      if (itr % 2 === 0) {
        while (xPos + wd < xEndPos + 0.1) {
          divSquare(xPos, yPos, wd)
          xPos += wd
        }
        wd = xEndPos - xPos
      } else {
        while (yPos + wd < yEndPos + 0.1) {
          divSquare(xPos, yPos, wd)
          yPos += wd
        }
        wd = yEndPos - yPos
      }
    }
  }

  p.mouseClicked = () => {
    let a = p.random(1, 20)
    let b = p.random(1, 20)

    while (a == b) {
      b = p.random(1, 20)
    }

    thr = p.random(10, 300)

    console.log("numA =", a, "numB =", b,"thr =", thr)

    ratio = a / b
    p.background(0, 0, 1)
    divSquare(0, 0, p.width)
  }
}

new p5(sketch)
