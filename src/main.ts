import p5 from "p5"

const sketch = (p: p5) => {
  let ratio = (1 + p.sqrt(5)) / 2
  let thr = 80
  let thr2 = 0.5

  p.setup = () => {
    p.createCanvas(500, 500);
    p.colorMode(p.HSB, 1);
    colorRect(0, 0, p.width, p.width)
    divSquare(0, 0, p.width)
  }

  function colorRect(xPos: number, yPos: number, wd: number, ht: number) {
    let col
    let val = p.random(1)
    
    if (val < 0.15) {
      col = p.color(0, 1, 1)
    } else if (val < 0.3) {
      col = p.color(2.0 / 3, 1, 1)
    } else if (val < 0.45) {
      col = p.color(1.0 / 6, 1, 1)
    } else if (val < 0.5) {
      col = p.color(0, 1, 0)
    } else if (val < 0.7) {
      col = p.color(0, 0, 0.9)
    } else {
      col = p.color(0, 0, 1)
    }

    p.fill(col)
    p.strokeWeight(5)
    p.rect(xPos, yPos, wd, ht)
  }

  function divRect(xPos: number, yPos: number, wd: number): void {
    let itr = 0
    let xEndPos = wd + xPos
    let yEndPos = wd / ratio + yPos
    
    // p.fill(p.color(p.random(1), 1, 1))
    // p.rect(xPos, yPos, wd ,wd)

    while (wd > thr) {
      itr++
      if (itr % 2 === 0) {
        while (xPos + wd < xEndPos + 0.1) {
          colorRect(xPos, yPos, wd, wd)
          if (p.random(1) < thr2) {
            divSquare(xPos, yPos, wd)
          }
          xPos += wd
        }
        wd = xEndPos - xPos
      } else {
        while (yPos + wd < yEndPos + 0.1) {
          colorRect(xPos, yPos, wd, wd)
          if (p.random(1) < thr2) {
            divSquare(xPos, yPos, wd)
          }
          yPos += wd
        }
        wd = yEndPos - yPos
      }
    }
  }

  function divSquare(xPos: number, yPos: number, wd: number) {
    let itr = 0
    let xEndPos = xPos + wd
    let yEndPos = yPos + wd

    // p.fill(p.color(p.random(1), 1, 1))
    // p.rect(xPos, yPos, wd, wd / ratio)

    while (wd > thr) {
      itr++
      if (itr % 2 === 1) {
        while (xPos + wd * ratio < xEndPos + 0.1) {
          colorRect(xPos, yPos, wd * ratio, wd)
          if (p.random(1) < thr2) {
            divRect(xPos, yPos, wd * ratio)
          }
          xPos += wd * ratio
        }
        wd = xEndPos - xPos
      } else {
        while (yPos + wd / ratio < yEndPos + 0.1) {
          colorRect(xPos, yPos, wd, wd / ratio)
          if (p.random(1) < thr2) {
            divRect(xPos, yPos, wd)
          }
          yPos += wd / ratio
        }
        wd = yEndPos - yPos
      }
    }
  }

  p.mouseClicked = () => {
    thr = p.random(10, 300)
    thr2 = p.random(0, 1)
    console.log("thr = ", thr, ", thr2 = ", thr2)
    colorRect(0, 0, p.width, p.width)
    divSquare(0, 0, p.width)
  }

}

new p5(sketch)