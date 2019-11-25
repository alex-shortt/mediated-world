import Color from "./Color"

export class Entity {
  constructor(props) {
    const defaultProps = {
      size: 128,
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    }
    this.props = { ...defaultProps, ...props }
  }

  reset() {
    this.fill = new Color({ s: 0, b: 100 })
  }

  affect(neighbor) {
    const { pos, rot, fill } = this.props
    const { light: nLight, pos: nPos, rot: nRot } = neighbor.getEntity()
    if (nLight) {
      if (!fill) {
        this.fill = new Color({ h: 0, s: 0, b: 0 })
      }

      const dist = distSq(pos[0], pos[1], pos[2], nPos[0], nPos[1], nPos[2])
      // console.log(dist)
    }
  }

  render(p) {}

  getEntity() {
    return this.props
  }
}

function distSq(x1, y1, z1, x2, y2, z2) {
  return (x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1) + (z2 - z1) * (z2 - z1)
}

// ml generative algorithm score metric: screen time for humans
