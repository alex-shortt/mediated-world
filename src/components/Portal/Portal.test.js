import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Portal from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Portal />).toJSON()

  expect(tree).toMatchSnapshot()
})
