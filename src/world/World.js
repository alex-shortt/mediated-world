// World: Collection of beings / sources

import Box from "world/Box"

export default class World {
  constructor(locProps = {}) {
    const defaultProps = {
      beings: []
    }

    this.props = { ...defaultProps, ...locProps }
  }

  createBeing(props = {}) {
    const newBeing = new Box(props)
    this.addBeing(newBeing)
  }

  addBeing(being) {
    const { beings } = this.props
    this.props.beings = [...beings, being]
  }

  getBeings() {
    const { beings } = this.props
    return beings
  }
}
