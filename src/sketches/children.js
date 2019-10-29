function sketch(p) {
  const boxes = []

  p.setup = () => {
    p.createCanvas(800, 600, p.WEBGL)
    boxes.push(new Box(70))
    boxes.push(new Box(60))
    boxes.push(new Box(50))
    boxes.push(new Box(40))
    boxes.push(new Box(30))
    boxes.push(new Box(20))
    boxes.push(new Box(10))
  }

  p.draw = () => {
    p.background(255)
    for (const box of boxes) {
      box.render()
    }
  }

  class Box {
    constructor(size) {
      this.size = size
    }

    render() {
      const sizeColorMod = 0.03 * this.size
      const colorTheta = p.frameCount * 0.01
      const r = (p.sin(colorTheta + sizeColorMod) * 255) / 2 + 255 / 2
      const g =
        (p.sin(colorTheta + (p.PI * 1) / 3 + sizeColorMod) * 255) / 2 + 255 / 2
      const b =
        (p.sin(colorTheta + (p.PI * 2) / 3 + sizeColorMod) * 255) / 2 + 255 / 2
      const a = p.map(this.size, 20, 70, 0, 0.9)
      p.fill(
        `rgba(${parseInt(r, 10)}, ${parseInt(g, 10)}, ${parseInt(b, 10)}, ${a})`
      )
      p.strokeWeight(3)
      p.rotateX(p.frameCount * 0.005)
      p.rotateY(p.frameCount * 0.005)
      p.box(p.sin(p.frameCount * 0.025) * this.size + 3 * this.size)
    }
  }
}

const title = "Children"
const date = "10-10-19"
const description = `Size of the cubes relate to amount of information stored, 
  so each of the cubes know more than the last. Position relates to how "in-sync" 
  cubes are relative to each other, so since they're positioned very evenly 
  and rotate based off of each other, you can tell they are closely related.`

export default { type: "p5", title, description, date, sketch }
