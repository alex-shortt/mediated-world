function sketch(p) {
  let camera

  const route = []
  const boxSize = 26

  const rResolution = 1.2
  const rSpeed = 0.01
  const rAmplitude = boxSize * boxSize * 3

  let gHue = p.random(0, 360)
  const hueSpeed = 0.8

  p.setup = () => {
    p.createCanvas(800, 600, p.WEBGL)
    p.setAttributes("perPixelLighting", true)
    p.colorMode(p.HSB)

    camera = p.createCamera()

    // 100 route items
    for (let i = 0; i < 70; i += 1) {
      route.push(new RouteItem(128))
    }
  }

  p.draw = () => {
    p.background(255)

    gHue += hueSpeed
    if (gHue > 360) {
      gHue = 0
    }

    // look 15 routeitems ahead
    p.camera(
      0,
      -route[1].getY(),
      400 + boxSize,
      0,
      -route[16].getY(),
      -16 * boxSize + 400 + boxSize,
      0,
      1,
      0
    )

    // render
    for (let i = 0; i < route.length; i += 1) {
      route[i].render(i)
    }
  }

  class RouteItem {
    constructor(radius) {
      this.radius = radius
      this.cx = 0
      this.cy = 0
      this.cz = 0
    }

    getY() {
      return -this.cy
    }

    render(i) {
      const { radius } = this
      this.cx = 0
      this.cy =
        p.noise((p.frameCount * 0.5 + i * rResolution) * rSpeed) * rAmplitude
      this.cz = -i * boxSize + 400 + boxSize
      const angleShift =
        (i / (route.length - 1)) * Math.PI +
        p.frameCount * 0.05 +
        p.sin(p.frameCount * 0.01 + i * 0.1)
      const circum = 2 * Math.PI * radius

      const numEntities = p.int(circum / boxSize)
      for (let e = 0; e < numEntities; e += 1) {
        const angle = (e / (numEntities - 1)) * Math.PI * 2 + angleShift
        const ex = Math.cos(angle) * radius
        const ey = Math.sin(angle) * radius
        const ez = p.sin(p.frameCount * 0.01 + i * 0.1) * boxSize * 0.7
        p.push()
        p.fill(
          p.noise((p.frameCount * 0.05 + i + angle) * 0.4) * 360,
          p.map(p.noise(p.frameCount * 0.05 + i, angle), 0, 1, 64, 100),
          p.map(p.noise(angle, p.frameCount * 0.05 + i), 0, 1, 30, 100)
        )
        p.translate(this.cx + ex, this.cy + ey, this.cz + ez)
        p.strokeWeight(2)
        p.box(boxSize)
        p.pop()
      }
    }
  }
}

const title = "Journey of a Lifetime"
const date = "11-25-19"
const description = `A general representation of an entire life's experience. 
  Time is represented as movement on the z axis, and progress in one's measure
  of success on the y axis (not absolute). Perlin noise is used to model y axis
  position, hue, saturation, and brightness, and it does a good job and roughly
  modelling a possible community. It's up to the spectator to input all the
  information and process it properly...`

export default {
  type: "p5",
  title,
  description,
  date,
  cover: true,
  sketch
}
