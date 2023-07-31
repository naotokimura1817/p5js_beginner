function setup() {
    createCanvas(500, 100);
    background(255)
    strokeWeight(5)
    smooth()
    
    stroke(0, 30)
    line(20, 50, 480, 50)
    
    stroke(20, 50, 70)
    
    let xStep = 10
    let lastX = -999
    let lastY = -999
    let angle = 0
    let y = 50
    
    for (let x = 20; x <= 480; x += xStep) {
      let rad = radians(angle)
      y = 20 + (customRandom() * 60)
      if (lastX > -999) {
        line(x, y, lastX, lastY)
      }
      lastX = x
      lastY = y
      angle++
    }
    
    
    
  //   let step = 5
  //   let lastX = -999
  //   let lastY = -999
  //   let yNoise = random(10)
  //   let y
  
  //   for (let x = 20; x <= 480; x += step) {
  //     y = 10 + noise(yNoise) * 80
  //     if (lastX > -999) {
  //       line(x, y, lastX, lastY)
  //     }
  //     lastX = x
  //     lastY = y
  //     yNoise += 0.03
  //   }
  }
  
  function customRandom() {
    let retValue = 1 - pow(random(1), 0.1)
    return retValue
  }
  
  
  
  
  // function draw() {
  //   background(220);
  // }