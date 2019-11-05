import Box from "world/Box"

function sketch(p) {
  const being = new Box()

  p.setup = () => {
    p.createCanvas(800, 600, p.WEBGL)
  }

  p.draw = () => {
    p.background(255)
    p.orbitControl()
    renderBox(p, being)
  }
}

function renderBox(p, box) {
  const { pos, rot, fill, stroke, size } = box.getBox()
  const fillHSLA = fill.getColor()
  const strokeWeight = stroke.getWeight() * size
  const strokeHSLA = stroke.getColor()

  p.push()

  p.translate(p.createVector(pos[0], pos[1], pos[2]))
  p.rotateX(rot[0])
  p.rotateY(rot[1])

  p.fill(p.color(fillHSLA))
  p.stroke(p.color(strokeHSLA))
  p.strokeWeight(strokeWeight)

  p.box(size)

  p.pop()
}

const title = "Ergodic Source"
const date = "11-4-19"
const description = `One being definitively represented to the best of my 
abilities. Coded for use moving forward in mind. I first defined color (hsla) 
and stroke (weight, color), then defined a being by its size, fill, stroke, 
pos, and rot. I hardcoded size, pos, and rot, leaving fill and stroke to be
mapped from Math.random() to its value range.`

export default { type: "p5", title, description, date, sketch }
