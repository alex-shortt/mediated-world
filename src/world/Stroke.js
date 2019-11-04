// Stroke :: Input & Output (I/O)
//    width (%)     <---> % of own information (% of GB)
//    color (color) <---> information outputted or absence of information
//                        inputted (^Color)

import Color from "world/Color"

export default class Stroke {
  constructor(props) {
    const defaultProps = {
      width: Math.random(),
      color: new Color()
    }
    this.props = { ...defaultProps, ...props }
  }
}
