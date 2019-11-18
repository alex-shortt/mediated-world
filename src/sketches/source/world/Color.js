// Color :: Information
//    hue (0-360)   <---> subject (relative)
//    saturation (%)<---> specificity (relative)
//    brightness (%) <---> transfer speed as % of own knowledge (relative)
//    alpha (%)     <---> clarity of message (relative)

// TODO: find how to duplicate class declarations for h, s, l, a params

export default class Color {
  constructor(props) {
    const defaultProps = {
      h: Math.random() * 360,
      s: Math.random() * 100,
      b: Math.random() * 100
    }
    this.props = { ...defaultProps, ...props }
    this.wrapValues()
  }

  setColor(newColor, props = {}) {
    const { wrap, normalize } = props
    this.props = { ...props, ...newColor }
    if (wrap) {
      this.wrapValues()
    }
    if (normalize) {
      this.normalizeValues()
    }
  }

  normalizeValues() {
    const { h, s, b } = this.props
    const newColor = {
      h: normalized(h, 0, 360),
      s: normalized(s, 0, 100),
      b: normalized(b, 0, 100)
    }
    this.setColor(newColor, true)
  }

  wrapValues() {
    const { h, s, b } = this.props
    const newColor = {
      h: wrapped(h, 0, 360),
      s: wrapped(s, 0, 100),
      b: wrapped(b, 0, 100)
    }
    this.setColor(newColor)
  }

  getColor() {
    return this.props
  }
}

function wrapped(val, min, max) {
  let newVal = val
  while (newVal > max) {
    newVal -= max - min
  }
  while (newVal < min) {
    newVal += max - min
  }
  return newVal
}

function normalized(val, min, max) {
  if (val > max) {
    return max
  }
  if (val < min) {
    return min
  }
  return val
}
