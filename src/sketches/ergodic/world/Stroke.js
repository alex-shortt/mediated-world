// Stroke :: Output
//    weight (%)    <---> speed of output as % of own information (% of GB / s)
//    color (^Color)<---> information outputted (^Color)

import Color from "./Color"

export default class Stroke {
  constructor(props) {
    const defaultProps = {
      weight: Math.random() * 0.1 + 0.01,
      color: new Color({ lightness: 0 })
    }
    this.props = { ...defaultProps, ...props }
  }

  setStroke(newStroke) {
    this.props = { ...this.props, ...newStroke }
  }

  getStroke() {
    return this.props
  }

  getColor() {
    return this.props.color.getColor()
  }

  getWeight() {
    return this.props.weight
  }
}
