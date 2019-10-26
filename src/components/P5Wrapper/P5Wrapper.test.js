import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import P5Wrapper from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<P5Wrapper />).toJSON()

  expect(tree).toMatchSnapshot()
})
