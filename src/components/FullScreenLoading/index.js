import React from "react"
import styled from "styled-components/macro"

import { useMousePos } from "services/sensors"

const FullScreenWrapper = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;

  background: white;
  border: 8px solid black;
`

export default function FullScreenLoading() {
  // TODO: react to network changes?

  const { handleMouseMove } = useMousePos()

  return <FullScreenWrapper onMouseMove={handleMouseMove} />
}
