let cnt = 0

function setup() {
  let fr = 2
  frameRate(fr)
  
  createCanvas(800, 480)
  background(255)
  // strokeWeight(0.5)
  
  let radius = 50
  let centX = 400
  let centY = 240
  
  stroke(0, 30)
  noFill()
  ellipse(centX, centY, radius * 2, radius * 2)
}

function draw() {
  // background(240)
  // background(50)
  let radius = 150
  let centX = 400
  let centY = 240

  drawCircle(radius, centX, centY)
  cnt++
  
  if (cnt === 40) {
    background(255)
    cnt = 0
  }
}

function drawCircle(radius, centX, centY) {
  stroke(random(100), random(100), random(100))
  let x, y
  let cnt = 0
  let lastX = -999
  let lastY = -999
  let radiusNoise = random(10)
  
  for (let ang = random(360); ang <= 1440 + random(1440); ang += 5 + random(2)) {
    radiusNoise += 0.05
    radius += 0.5
    let thisRadius = radius + (noise(radiusNoise) * 400) - 100
    let rad = radians(ang)
    x = centX + (thisRadius * cos(rad))
    y = centY + (thisRadius * sin(rad))
    if (lastX > -999) {  
      strokeWeight(0.5 + random(1))
      line(x, y, lastX, lastY)
    }
    lastX = x
    lastY = y
  }
  cnt++
}