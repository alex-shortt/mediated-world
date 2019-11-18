import { Entity } from "world/Entity"
import Color from "world/Color"

export class Environment {
  constructor(props) {
    const defaultProps = {
      ambientLight: true,
      entities: []
    }
    this.props = { ...defaultProps, ...props }
  }

  addEntity(e) {
    const { entities } = this.props
    entities.push(e)
  }

  update() {
    const { entities, ambientLight } = this.props

    const ambientEntity = new Entity({
      light: new Color({ h: 0, s: 0, b: ambientLight ? 100 : 0 })
    })

    for (const entity of entities) {
      entity.reset()
      entity.affect(ambientEntity)

      for (const neighbor of entities) {
        if (neighbor !== entity) {
          entity.affect(neighbor)
        }
      }
    }
  }
}

export class EnvironmentP5 extends Environment {
  constructor(props) {
    super(props)
  }

  render() {
    const { p, entities } = this.props
    for (const entity of entities) {
      entity.render(p)
    }
  }
}

// TODO: integrate typescript
