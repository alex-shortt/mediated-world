// Box :: Being
//    size (px)        <---> amount of information stored (GB)
//    fill (^Color)    <---> information outputted (^Color)
//    light (^Color)   <---> information outputted
//    stroke (^Stroke) <---> active output of being (^Stroke)
//    pos (Vector)     <---> coincidence with other beings (relative)
//    rot (Vector)     <---> coincidence with other beings (relative)

import Color from "./Color"

export default class Box {
  constructor(props) {
    const defaultProps = {
      size: 128,
      fill: new Color(),
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
