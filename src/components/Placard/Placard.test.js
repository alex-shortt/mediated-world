import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Placard from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Placard />).toJSON()

  expect(tree).toMatchSnapshot()
})
