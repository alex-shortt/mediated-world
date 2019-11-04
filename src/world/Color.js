// Color :: Information
//    hue (0-255)   <---> subject (relative)
//    saturation (%)<---> quality (relative)
//    lightness (%) <---> understanding (relative)
//    alpha (%)     <---> clarity of message (relative)

// TODO: find how to duplicate class declarations for h, s, l, a params

export default class Color {
  constructor(props) {
    const defaultProps = {
      hue: Math.floor(Math.random() * 255),
      saturation: Math.floor(Math.random() * 100),
      lightness: Math.floor(Math.random() * 100),
      alpha: Math.floor(Math.random() * 100)
    }
    this.props = { ...defaultProps, ...props }
    this.wrapValues()
  }

  setColor(newColor, props) {
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
      hue: normalized(hue, 0, 255),
      saturation: normalized(saturation, 0, 100),
      lightness: normalized(lightness, 0, 100),
      alpha: normalized(alpha, 0, 100)
    }
    this.setColor(newColor, true)
  }

  wrapValues() {
    const { hue, saturation, lightness, alpha } = this.props
    const newColor = {
      hue: wrapped(hue, 0, 255),
      saturation: wrapped(saturation, 0, 100),
      lightness: wrapped(lightness, 0, 100),
      alpha: wrapped(alpha, 0, 100)
    }
    this.setColor(newColor)
  }

  toString() {
    const { hue, saturation, lightness, alpha } = this.props
    const h = parseInt(hue, 10)
    const s = parseInt(saturation, 10)
    const l = parseInt(lightness, 10)
    const a = parseInt(alpha, 10)

    return `hsla(${h}, ${s}%, ${l}%, ${a}%)`
  }
}

function wrapped(val, min, max) {
  let newVal = val
  while (val > max) {
    newVal -= max - min
  }
  while (val < min) {
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
