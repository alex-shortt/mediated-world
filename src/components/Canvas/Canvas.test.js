import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Canvas from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Canvas />).toJSON()

  expect(tree).toMatchSnapshot()
})
