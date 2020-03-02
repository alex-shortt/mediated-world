import React from "react"
import renderer from "react-test-renderer"
import "jest-styled-components"

import Device from "./index"

it("renders correctly", () => {
  const tree = renderer.create(<Device />).toJSON()

  expect(tree).toMatchSnapshot()
})
