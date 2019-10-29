import p5 from "p5"

function sketch(p) {
  const boxes = []
  let prevX = 0
  let prevY = 0

  p.setup = () => {
    p.createCanvas(1000, 800, p.WEBGL)
    boxes.push(new Box({ size: p.height / 3, z: 10 }))
  }

  p.draw = () => {
    p.background(255)
    p.strokeWeight(3)

    const mouseX = (p.mouseX / p.width) * 2 - 1
    const mouseY = (p.mouseY / p.height) * 2 - 1
    const delta = p.dist(mouseY, prevY, mouseX, mouseY)

    prevX = mouseX
    prevY = mouseY

    for (const box of boxes) {
      box.draw(mouseX, mouseY, delta)
    }
  }

  class Box {
    constructor(props) {
      this.props = props
    }

    draw(mouseX, mouseY, delta) {
      const { size, z } = this.props

      p.push()

      const mouseAngle = Math.atan2(-mouseY, mouseX)

      const h = p.int(p.map(mouseAngle, -p.PI, p.PI, 0, 255), 10)
      const s = p.int(p.map(Math.abs(delta), 0, 2, 0, 100))

      p.fill(p.color(`hsla(${h}, ${s}%, 90%, 0.9)`))

      const yRot = Math.atan2(mouseX, z) // <-->
      const xRot = -Math.atan2(mouseY, z)
      p.rotateY(yRot)
      p.rotateX(xRot)
      p.box(size)
      p.pop()
    }
  }

  class Cluster {
    constructor(pos, numMembers) {
      this.pos = pos
      this.numMembers = numMembers

      this.variance = 30
      const maxVector = p.createVector(1, 1, 1).mult(this.variance)
      this.maxDist = maxVector.mag() * 2

      this.hueOffset = Math.random() * 1000
      this.saturation = Math.pow(Math.random(), 2) * 100 // y = x^2

      this.boxes = []

      for (let i = 0; i < numMembers; i += 1) {
        this.boxes.push(this.generateBox())
      }

      this.assignCommunityValue()
    }

    generateBox() {
      const vector = p5.Vector.random3D()
        .mult(this.variance)
        .add(this.pos)
      const size = Math.random() * this.variance
      const lightness = Math.pow(Math.random(), 2) * 100 // y = 100 * x^2

      return { vector, size, lightness }
    }

    assignCommunityValue() {
      for (let x = 0; x < this.boxes.length; x += 1) {
        let value = 0

        for (let y = 0; y < this.boxes.length; y += 1) {
          if (y !== x) {
            const xPos = this.boxes[x].vector
            const yPos = this.boxes[y].vector
            value += xPos.dist(yPos)
          }
        }

        this.boxes[x].community = value / this.maxDist / this.numMembers
      }
    }

    render() {
      for (const box of this.boxes) {
        p.push()
        const h = parseInt(
          p.map(p.sin(p.frameCount * 0.005 + this.hueOffset), -1, 1, 0, 255),
          10
        )
        const s = parseInt(this.saturation, 10)
        const l = parseInt(box.lightness, 10)
        const a = box.community.toFixed(3)

        p.fill(p.color(`hsla(${h}, ${s}%, ${l}%, ${a})`))
        p.translate(box.vector)
        p.box(box.size)
        p.pop()
      }
    }
  }
}

const title = "Plugged"
const date = "10-30-19"
const description = "What if they were able to look back at you"

export default { type: "p5", title, description, date, sketch }
