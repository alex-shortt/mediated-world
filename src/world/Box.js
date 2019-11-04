// Box :: Being
//    size (px)        <---> amount of information stored (GB)
//    fill (^Color)    <---> absence of information inputted (^Color)
//    stroke (^Stroke) <---> active I/O of being (^Stroke)
//    pos (Vector)     <---> coincidence with other beings (relative)
//    rot (Vector)     <---> coincidence with other beings (relative)

import Color from "world/Color"
import Stroke from "world/Stroke"

export default class Box {
  constructor(props) {
    const defaultProps = {
      size: 64,
      fill: new Color(),
      stroke: new Stroke(),
      pos: [0, 0, 0],
      rot: [0, 0, 0]
    }
    this.props = { ...defaultProps, ...props }
  }

  setBox(newBox) {
    this.props = { ...this.props, newBox }
  }

  getBox() {
    return this.props
  }
}
