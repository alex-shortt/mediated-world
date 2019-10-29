import p5 from "p5"

function sketch(p) {
  const numClusters = 12
  const clusters = []

  p.setup = () => {
    p.createCanvas(1000, 800, p.WEBGL)

    for (let i = 0; i < numClusters; i += 1) {
      const x = ((Math.random() - 0.5) * p.width * 3) / 4
      const y = ((Math.random() - 0.5) * p.height * 3) / 4
      const z = (Math.random() - 0.5) * 20
      const vector = p.createVector(x, y, z)
      const numMembers = Math.floor(Math.random() * 9)
      clusters.push(new Cluster(vector, numMembers))
    }
  }

  p.draw = () => {
    p.background(255)
    p.strokeWeight(3)
    for (const cluster of clusters) {
      cluster.render()
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

const title = "Community"
const description = `Premature attempt at community. A few good notes, though:
absolute position of multiple beings means nothing - only relativity matters. 
Groups of cubes show communities, and within communities similar information is
being passed around and there are varying levels of knowledge. Some cubes are
inherently smarter, and those cubes that are surrounded by others receive 
messages more clearly (reinforced).
`

export default { type: "p5", title, description, sketch }
