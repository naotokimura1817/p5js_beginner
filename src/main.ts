import p5 from "p5";

const sketch = (p: p5) => {
  let ratio = p.sqrt(2);

  p.setup = () => {
    p.createCanvas(500, 353);
    p.colorMode(p.HSB, 1);
  };

  p.draw = () => {
    p.background(0, 0, 1);
    let scalar = p.pow(50, (p.mouseX * 1.0) / p.width) * p.width;
    divRect(p.width - scalar, p.height - scalar / ratio, scalar);
  };


  function divRect(xPos: number, yPos: number, wd: number) {
    let itr = 0;
    let xEndPos = xPos + wd;
    let yEndPos = yPos + wd / ratio;

    while (wd > 0.1) {
      itr++;
      p.fill(p.color((itr * ratio) % 1, 1, 1));
      if (itr % 2 === 0) {
        while (xPos + wd < xEndPos + 0.1) {
          p.rect(xPos, yPos, wd, wd);
          xPos += wd;
        }
        wd = xEndPos - xPos;
      } else {
        while (yPos + wd < yEndPos + 0.1) {
          p.rect(xPos, yPos, wd, wd);
          yPos += wd;
        }
        wd = yEndPos - yPos;
      }
    }
  }

  p.mouseClicked = () => {};
};

new p5(sketch);
