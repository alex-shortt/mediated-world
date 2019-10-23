import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Navigation from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Navigation />).toJSON()

  expect(tree).toMatchSnapshot()
})
