import React from "react"
import styled from "styled-components/macro"

import { useAspectRatio, useRefDimensions } from "services/dimensions"

const Container = styled.div`
  border: 4px solid black;
  background: white;
  box-sizing: border-box;
`

export default function Portal(props) {
  const { parentRef } = props

  const ratio = useAspectRatio()
  const parentDimensions = useRefDimensions(parentRef)

  const width = parentDimensions.height * ratio
  const height = parentDimensions.height * 1

  return <Container style={{ width: `${width}px`, height: `${height}px` }} />
}
