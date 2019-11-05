import p5 from "p5"

function sketch(p) {
  const boxes = []
  let prevX = 0
  let prevY = 0
  let totalDelta = 0

  p.setup = () => {
    p.createCanvas(800, 800, p.WEBGL)
    boxes.push(new Box({ size: p.height / 3, z: 10, shiftFactor: 60 }))
  }

  p.draw = () => {
    p.background(255)

    const mouseX = (p.mouseX / p.width) * 2 - 1
    const mouseY = (p.mouseY / p.height) * 2 - 1
    const delta = p.dist(prevX, prevY, mouseX, mouseY)
    totalDelta += Math.abs(delta) * 8

    prevX = mouseX
    prevY = mouseY

    for (const box of boxes) {
      box.draw(mouseX, mouseY)
    }
  }

  class Box {
    constructor(props) {
      this.props = { movedDelta: 0, ...props }
    }

    draw(mouseX, mouseY) {
      const { size, z, shiftFactor, movedDelta } = this.props

      let moveDelta = 0
      if (totalDelta > movedDelta) {
        moveDelta = (totalDelta - movedDelta) / shiftFactor
        if (moveDelta < 0.01) {
          this.props.movedDelta = totalDelta
        }
      }

      this.props.movedDelta += moveDelta

      p.push()
      p.strokeWeight(p.map(moveDelta, 0, 1, 0, 4))

      const mouseAngle = Math.abs(Math.atan2(-mouseY, mouseX))

      const h = p.int(p.map(mouseAngle, 0, p.PI, 0, 255), 10)
      const s = p.int(p.map(moveDelta, 0, 2, 0, 100))
      const l = p.int(p.map(moveDelta, 0, 4, 100, 0))

      p.fill(p.color(`hsla(${h}, ${s}%, ${l}%, 100)`))

      const yRot = Math.atan2(mouseX, z) // <-->
      const xRot = -Math.atan2(mouseY, z)

      p.rotateY(yRot)
      p.rotateX(xRot)
      p.box(Math.min(size + movedDelta / 8, size + size / 2))
      p.pop()
    }
  }
}

const title = "Plugged"
const date = "10-30-19"
const description = `A relationship between the viewer and the being. The being
  collects the information you can give it given your resources of this website.
  When it collects, it doesn't do a great job of collecting everything at once - 
  it's not used to the form of communication you're giving it. But, it can still
  see, and it can still collect information. When you have nothing more to give
  it, it has nothing more to collect.
`

export default { type: "p5", title, description, date, sketch }
