function setup() {
  createCanvas(2500, 2500)
  background(0, 0, 0)
}

function draw() {
  var v = 30
  if (keyIsPressed) {
    noStroke()

    while (key == 't') {   
      v++ 
      console.log(v)
      break
    }
    
    if (key == 'r') {
      ellipse(mouseX, mouseY, v, v)
      fill(255, 0, 0)
    }
    if (key == 'g') {
      rect(mouseX, mouseY, 30, 30)
      fill(0, 255, 0)
    }
    if (key == 'b') {
      ellipse(mouseX, mouseY, 30, 30)
      fill(0, 0, 255)
    }
    if (key == 'p') {
      fill(148,0,211)
      triangle(mouseX,mouseY,(mouseX+18),(mouseY-55),(mouseX+56),mouseY)
    }
   
  }
}
