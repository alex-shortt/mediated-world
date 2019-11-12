// Color :: Information
//    hue (0-255)   <---> subject (relative)
//    saturation (%)<---> specificity (relative)
//    lightness (%) <---> transfer speed as % of own knowledge (relative)
//    alpha (%)     <---> clarity of message (relative)

// TODO: find how to duplicate class declarations for h, s, l, a params

export default class Color {
  constructor(props) {
    const defaultProps = {
      hue: Math.random() * 360,
      saturation: Math.random(),
      lightness: Math.random(),
      alpha: Math.random()
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
    const { hue, saturation, lightness, alpha } = this.props
    const newColor = {
      hue: normalized(hue, 0, 360),
      saturation: normalized(saturation, 0, 100),
      lightness: normalized(lightness, 0, 100),
      alpha: normalized(alpha, 0, 100)
    }
    this.setColor(newColor, true)
  }

  wrapValues() {
    const { hue, saturation, lightness, alpha } = this.props
    const newColor = {
      hue: wrapped(hue, 0, 360),
      saturation: wrapped(saturation, 0, 100),
      lightness: wrapped(lightness, 0, 100),
      alpha: wrapped(alpha, 0, 100)
    }
    this.setColor(newColor)
  }

  getColor() {
    const { hue, saturation, lightness, alpha } = this.props
    const h = parseInt(hue, 10)
    const s = Math.floor(saturation * 100)
    const l = Math.floor(lightness * 100)
    const a = alpha.toFixed(2)

    return `hsla(${h}, ${s}%, ${l}%, 1)`
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
