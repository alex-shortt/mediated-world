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
      s: Math.random(),
      b: Math.random(),
      a: Math.random()
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
    const { h, s, b, a } = this.props
    const newColor = {
      h: normalized(h, 0, 360),
      s: normalized(s, 0, 100),
      b: normalized(b, 0, 100),
      a: normalized(a, 0, 100)
    }
    this.setColor(newColor, true)
  }

  wrapValues() {
    const { h, s, b, a } = this.props
    const newColor = {
      h: wrapped(h, 0, 360),
      s: wrapped(s, 0, 100),
      b: wrapped(b, 0, 100),
      a: wrapped(a, 0, 100)
    }
    this.setColor(newColor)
  }

  getColorHSLA() {
    const { h, s, l, a } = sb2sl(this.props)
    const newH = parseInt(h, 10)
    const newS = Math.floor(s * 100)
    const newL = Math.floor(l * 100)
    const newA = a.toFixed(2)
    return `hsla(${newH}, ${newS}%, ${newL}%, 1)`
  }

  getColor() {
    return this.props
  }
}

function sb2sl(SB) {
  const SL = { h: SB.h, a: SB.a }
  SL.l = ((2 - SB.s) * SB.b) / 2
  SL.s =
    SL.l && SL.l < 1
      ? (SB.s * SB.b) / (SL.l < 0.5 ? SL.l * 2 : 2 - SL.l * 2)
      : SL.s
  return SL
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
